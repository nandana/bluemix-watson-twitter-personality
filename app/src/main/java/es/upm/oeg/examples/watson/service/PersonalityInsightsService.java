package es.upm.oeg.examples.watson.service;

import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.fluent.Executor;
import org.apache.http.client.fluent.Request;
import org.apache.http.client.fluent.Response;
import org.apache.http.entity.ContentType;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

public class PersonalityInsightsService extends WatsonService {

    public PersonalityInsightsService() {
        serviceName = "personality_insights";
        processVCAP_Services();
    }

    public String analyse (String text) throws IOException, URISyntaxException {

        URI profileURI = new URI(baseURL + "/v2/profile").normalize();

        Request profileRequest = Request.Post(profileURI)
                .addHeader("Accept", "application/json")
                .bodyString(text, ContentType.TEXT_PLAIN);

        Executor executor = Executor.newInstance().auth(username, password);
        Response response = executor.execute(profileRequest);
        HttpResponse httpResponse = response.returnResponse();

        if (httpResponse.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {

            ByteArrayOutputStream os = new ByteArrayOutputStream();
            httpResponse.getEntity().writeTo(os);
            return new String(os.toByteArray());

        } else {
            //TODO handle the exception properly
            throw new RuntimeException("Personality Insights Service failed");
        }
    }
}
