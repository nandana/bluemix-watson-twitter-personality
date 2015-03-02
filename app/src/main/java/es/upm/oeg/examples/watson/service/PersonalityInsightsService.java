/**
 * Copyright (C) 2014 Ontology Engineering Group, Universidad Politécnica de Madrid (http://www.oeg-upm.net/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
