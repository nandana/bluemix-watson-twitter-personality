/*-------------------------------------------------------------------*/
/* Copyright IBM Corp. 2013 All Rights Reserved                      */
/*-------------------------------------------------------------------*/

package es.upm.oeg.examples.watson.servlets;

import es.upm.oeg.examples.watson.service.LanguageIdentificationService;
import es.upm.oeg.examples.watson.service.MachineTranslationService;
import es.upm.oeg.examples.watson.service.PersonalityInsightsService;
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
public class TwitterAnalysisServlet extends HttpServlet {

	private static Logger logger = Logger.getLogger(TwitterAnalysisServlet.class.getName());

	private static final long serialVersionUID = 1L;
	private Map<String, String> env;
	private String consumer_key;
	private String consumer_secret;
	private String access_token;
	private String access_key;

	LanguageIdentificationService languageIdentification;

	MachineTranslationService machineTranslation;

	PersonalityInsightsService personalityInsightsService;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public TwitterAnalysisServlet() {
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
			List<Status> retweets = twitter.getUserTimeline(twitterUsername, new Paging(1, 20)); // get the first twenty tweets
			int retweetCount = 0;
			List<String> langs = new ArrayList<>();
			List<String> translated = new ArrayList<>();


			StringBuilder aggregatedTextBuilder = new StringBuilder();
			String personalityInsights = null;

			for (Status tweet : retweets) {
				String tweetText = tweet.getText();
				try {
					String lang = languageIdentification.getLang(tweetText);
					langs.add(lang);
					String englishText;
					//TODO do the same for french and portuguese
					if (LanguageIdentificationService.ES_ES.equals(lang)) {
						englishText = machineTranslation.translate(tweetText, MachineTranslationService.ES_TO_EN);
					} else if (LanguageIdentificationService.FR_FR.equals(lang)) {
						englishText = machineTranslation.translate(tweetText, MachineTranslationService.FR_TO_EN);
					} else if (LanguageIdentificationService.PT_BR.equals(lang)) {
						englishText = machineTranslation.translate(tweetText, MachineTranslationService.PT_TO_EN);
					} else {
						englishText = tweetText;
					}
					translated.add(englishText);
					aggregatedTextBuilder.append(englishText);

					personalityInsights = personalityInsightsService.analyse(aggregatedTextBuilder.toString());

				} catch (Exception e) {
					// Log something and return an error message
					logger.log(Level.SEVERE, "got error: "+e.getMessage(), e);
					request.setAttribute("error", e.getMessage());
				}

			}

			request.setAttribute("t_name", twitterUsername);
			request.setAttribute("rtweets", retweets);
			request.setAttribute("langs", langs);
			request.setAttribute("translated", translated);
			request.setAttribute("personalityInsights", personalityInsights);
			request.setAttribute("aggregatedText", aggregatedTextBuilder.toString());

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
		languageIdentification = new LanguageIdentificationService();
		machineTranslation = new MachineTranslationService();
		personalityInsightsService = new PersonalityInsightsService();
	}

}
