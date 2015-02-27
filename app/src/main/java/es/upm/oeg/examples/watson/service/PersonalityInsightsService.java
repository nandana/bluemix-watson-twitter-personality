package es.upm.oeg.examples.watson.service;

import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.StatusLine;
import org.apache.http.client.fluent.Executor;
import org.apache.http.client.fluent.Request;
import org.apache.http.client.fluent.Response;
import org.apache.http.entity.ContentType;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.logging.Logger;

public class PersonalityInsightsService extends WatsonService {

    private static Logger logger = Logger.getLogger(PersonalityInsightsService.class.getName());

    public PersonalityInsightsService() {
        serviceName = "personality_insights";
        processVCAP_Services();
    }

    public String analyse (String text) throws IOException, URISyntaxException {

        logger.info("Analyzing the text: \n" + text);

        URI profileURI = new URI(baseURL + "/v2/profile").normalize();
        logger.info("Profile URI: " + profileURI.toString() );

        Request profileRequest = Request.Post(profileURI)
                .addHeader("Accept", "application/json")
                .bodyString(text, ContentType.TEXT_PLAIN);

        Executor executor = Executor.newInstance().auth(username, password);
        Response response = executor.execute(profileRequest);
        HttpResponse httpResponse = response.returnResponse();
        StatusLine statusLine = httpResponse.getStatusLine();

        ByteArrayOutputStream os = new ByteArrayOutputStream();
        httpResponse.getEntity().writeTo(os);
        String responseBody = new String(os.toByteArray());

        if (statusLine.getStatusCode() == HttpStatus.SC_OK) {

            return responseBody;

        } else {

            String msg = String.format("Personality Insights Service failed - %d %s \n %s",
                    statusLine.getStatusCode(), statusLine.getReasonPhrase(), response);
            logger.severe(msg);
            throw new RuntimeException(msg);
        }
    }
}
