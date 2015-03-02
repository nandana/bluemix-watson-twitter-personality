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

import com.ibm.json.java.JSONArray;
import com.ibm.json.java.JSONObject;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

public abstract class WatsonService {

    private static Logger logger = Logger.getLogger(WatsonService.class.getName());

    protected String serviceName = "<service name>";

    protected String baseURL = "<service url>";
    protected String username = "<service username>";
    protected String password = "<service password>";


    protected void processVCAP_Services() {
        logger.info("Processing VCAP_SERVICES");
        JSONObject sysEnv = getVcapServices();
        if (sysEnv == null) return;
        logger.info("Looking for: "+ serviceName);

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

    /**
     * Gets the <b>VCAP_SERVICES</b> environment variable and return it
     *  as a JSONObject.
     *
     * @return the VCAP_SERVICES as Json
     */
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
