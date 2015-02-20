/*-------------------------------------------------------------------*/
/* Copyright IBM Corp. 2013 All Rights Reserved                      */
/*-------------------------------------------------------------------*/

package com.sampleapp.web;

import twitter4j.*;
import twitter4j.auth.AccessToken;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

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

	LanguageIdentificationService lid;

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
				try {
					langs.add(lid.getLang(tweetText));
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
		lid = new LanguageIdentificationService();
	}

}
