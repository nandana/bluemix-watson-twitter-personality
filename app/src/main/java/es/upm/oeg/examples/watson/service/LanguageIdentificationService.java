package es.upm.oeg.examples.watson.service;

import com.ibm.json.java.JSONObject;
import org.apache.commons.codec.binary.Base64;
import org.apache.http.NameValuePair;
import org.apache.http.client.fluent.Executor;
import org.apache.http.client.fluent.Request;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.entity.ContentType;
import org.apache.http.message.BasicNameValuePair;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

public class LanguageIdentificationService extends WatsonService {

    private static Logger logger = Logger.getLogger(LanguageIdentificationService.class.getName());

    public static final String ES_ES = "es-ES";

    public static final String EN_US = "en-US";

    public static final String FR_FR = "fr-FR";

    public static final String PT_BR = "pt-BR";

    public LanguageIdentificationService(){
        serviceName = "language_identification";
        processVCAP_Services();
    }

    public String getLang(String text) throws IOException, URISyntaxException {

        List<NameValuePair> qparams = new ArrayList<NameValuePair>();
        qparams.add(new BasicNameValuePair("txt", text ));
        qparams.add(new BasicNameValuePair("sid","lid-generic" ));
        qparams.add(new BasicNameValuePair("rt","json" ));

        Executor executor = Executor.newInstance().auth(username, password);

        URI serviceURI = new URI(baseURL).normalize();
        String auth = username + ":" + password;
        String resp = executor.execute(Request.Post(serviceURI)
                        .addHeader("Authorization", "Basic "+ Base64.encodeBase64String(auth.getBytes()))
                        .bodyString(URLEncodedUtils.format(qparams, "utf-8"),
                                ContentType.APPLICATION_FORM_URLENCODED)
        ).returnContent().asString();

        JSONObject lang = JSONObject.parse(resp);

        return lang.get("lang").toString();

    }




}
