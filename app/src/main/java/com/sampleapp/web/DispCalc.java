/*-------------------------------------------------------------------*/
/* Copyright IBM Corp. 2013 All Rights Reserved                      */
/*-------------------------------------------------------------------*/

package com.sampleapp.web;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.binary.Base64;
import org.apache.http.NameValuePair;
import org.apache.http.client.fluent.Executor;
import org.apache.http.client.fluent.Request;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.entity.ContentType;
import org.apache.http.message.BasicNameValuePair;

import com.ibm.json.java.JSONArray;
import com.ibm.json.java.JSONObject;
import org.apache.commons.codec.binary.Base64;
import org.apache.http.NameValuePair;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.entity.ContentType;
import org.apache.http.message.BasicNameValuePair;
import twitter4j.Paging;
import twitter4j.Query;
import twitter4j.QueryResult;
import twitter4j.Status;
import twitter4j.Twitter;
import twitter4j.TwitterException;
import twitter4j.TwitterFactory;
import twitter4j.User;
import twitter4j.auth.AccessToken;

/**
 * Servlet implementation class DispCalc
 */
public class DispCalc extends HttpServlet {

	private static Logger logger = Logger.getLogger(DispCalc.class.getName());

	private static final long serialVersionUID = 1L;
	private Map<String, String> env;
	private String consumer_key;
	private String consumer_secret;
	private String access_token;
	private String access_key;

	// If running locally complete the variables below with the information in VCAP_SERVICES
	private String baseURL = "<service url>";
	private String username = "<service username>";
	private String password = "<service password>";

	String serviceName = "language_identification";

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DispCalc() {
		super();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String twitterUsername = request.getParameter("twitter_name");
		// The factory instance is re-useable and thread safe.
		Twitter twitter = new TwitterFactory().getInstance();
		env = System.getenv();
		consumer_key = env.get("TWITTER_CONSUMER_KEY");
		consumer_secret = env.get("TWITTER_CONSUMER_SECRET");
		access_token = env.get("TWITTER_ACCESS_TOKEN");
		access_key = env.get("TWITTER_ACCESS_KEY");

		AccessToken accessToken= new AccessToken(access_token, access_key);
		
		try {
			twitter.setOAuthConsumer(consumer_key, consumer_secret);
			twitter.setOAuthAccessToken(accessToken);

			twitter4j.User a_name = twitter.showUser(twitterUsername);
			int followerCount = a_name.getFollowersCount();
			List<Status> retweets = twitter.getUserTimeline(twitterUsername, new Paging(1, 10)); // get the first ten tweets
			int retweetCount = 0;
			List<String> langs = new ArrayList<>();

			for (Status tweet : retweets) {
				String tweetText = tweet.getText();

				List<NameValuePair> qparams = new ArrayList<NameValuePair>();
				qparams.add(new BasicNameValuePair("txt", tweetText ));
				qparams.add(new BasicNameValuePair("sid","lid-generic" ));
				qparams.add(new BasicNameValuePair("rt","json" ));

				try {
					Executor executor = Executor.newInstance().auth(username, password);
					URI serviceURI = new URI(baseURL).normalize();
					String auth = username + ":" + password;
					String resp = executor.execute(Request.Post(serviceURI)
									.addHeader("Authorization", "Basic "+ Base64.encodeBase64String(auth.getBytes()))
									.bodyString(URLEncodedUtils.format(qparams, "utf-8"),
											ContentType.APPLICATION_FORM_URLENCODED)
					).returnContent().asString();

					JSONObject lang = JSONObject.parse(resp);

					//Send text and language to index.jsp
					langs.add(lang.get("lang").toString());

				} catch (Exception e) {
					// Log something and return an error message
					logger.log(Level.SEVERE, "got error: "+e.getMessage(), e);
					request.setAttribute("error", e.getMessage());
				}

			}



			request.setAttribute("t_name", twitterUsername);
			request.setAttribute("rtweets", retweets);
			request.setAttribute("langs", langs);

			request.getRequestDispatcher("/myTweets.jsp").forward(request, response);
		} catch (TwitterException e) {

			e.printStackTrace();
			if (e.getErrorCode() == 215 || e.getErrorCode() == 32)
			{
				response.sendRedirect("../index.html?message=errorcode215");
			}
			else if (e.getErrorCode() == -1 || e.getErrorCode() == 34)
			{
				response.sendRedirect("../index.html?message=errorcode-1");
			}
			else
			{
				response.sendRedirect("../index.html?message=errorcode99");
			}
			//throw new ServletException("Encountered a problem fetching data from Twitter - " + e.getErrorMessage());
		}
	}

	@Override
	public void init() throws ServletException {
		super.init();
		processVCAP_Services();
	}

	/**
	 * Gets the <b>VCAP_SERVICES</b> environment variable and return it
	 *  as a JSONObject.
	 *
	 * @return the VCAP_SERVICES as Json
	 */
	private void processVCAP_Services() {
		logger.info("Processing VCAP_SERVICES");
		JSONObject sysEnv = getVcapServices();
		if (sysEnv == null) return;
		logger.info("Looking for: "+ serviceName );

		if (sysEnv.containsKey(serviceName)) {
			JSONArray services = (JSONArray)sysEnv.get(serviceName);
			JSONObject service = (JSONObject)services.get(0);
			JSONObject credentials = (JSONObject)service.get("credentials");
			baseURL = (String)credentials.get("url");
			username = (String)credentials.get("username");
			password = (String)credentials.get("password");
			logger.info("baseURL  = "+baseURL);
			logger.info("username   = "+username);
			logger.info("password = "+password);
		} else {
			logger.warning(serviceName + " is not available in VCAP_SERVICES, "
					+ "please bind the service to your application");
		}
	}

	private JSONObject getVcapServices() {
		String envServices = System.getenv("VCAP_SERVICES");
		if (envServices == null) return null;
		JSONObject sysEnv = null;
		try {
			sysEnv = JSONObject.parse(envServices);
		} catch (IOException e) {
			// Do nothing, fall through to defaults
			logger.log(Level.SEVERE, "Error parsing VCAP_SERVICES: "+e.getMessage(), e);
		}
		return sysEnv;
	}
}
