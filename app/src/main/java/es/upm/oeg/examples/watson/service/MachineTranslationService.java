package es.upm.oeg.examples.watson.service;

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

public class MachineTranslationService extends WatsonService {

    private static Logger logger = Logger.getLogger(MachineTranslationService.class.getName());

    public static final String EN_TO_ES = "mt-enus-eses";
    public static final String ES_TO_EN = "mt-eses-enus";
    public static final String EN_TO_FR = "mt-enus-frfr";
    public static final String EN_TO_PT = "mt-enus-ptbr";
    public static final String FR_TO_EN = "mt-frfr-enus";
    public static final String PT_TO_EN = "mt-ptbr-enus";


    public MachineTranslationService(){
        serviceName = "machine_translation";
        processVCAP_Services();
    }

    public String translate(String text, String sid) throws IOException, URISyntaxException {

        logger.info("Text to translate :" + text);
        logger.info("Translation type :" + sid);

        List<NameValuePair> qparams = new ArrayList<NameValuePair>();
        qparams.add(new BasicNameValuePair("txt",text ));
        qparams.add(new BasicNameValuePair("sid",sid ));
        qparams.add(new BasicNameValuePair("rt","text" ));

        Executor executor = Executor.newInstance();
        URI serviceURI = new URI(baseURL).normalize();
        String auth = username + ":" + password;
        byte[] responseB = executor.execute(Request.Post(serviceURI)
                        .addHeader("Authorization", "Basic " + Base64.encodeBase64String(auth.getBytes()))
                        .bodyString(URLEncodedUtils.format(qparams, "utf-8"),
                                ContentType.APPLICATION_FORM_URLENCODED)
        ).returnContent().asBytes();

        String response = new String (responseB,"UTF-8");

        logger.info("Translation response :" + response);

        return response;

    }
}
