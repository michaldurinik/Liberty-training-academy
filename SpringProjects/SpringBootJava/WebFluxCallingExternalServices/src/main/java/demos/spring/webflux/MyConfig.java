package demos.spring.webflux;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class MyConfig {
    @Bean
    public WebClient foobar() {
        return WebClient.builder()
                .baseUrl("http://localhost:7474/db/data/transaction/commit")
                .defaultCookie("cookieKey", "cookieValue")
                .defaultHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Basic bmVvNGo6cGFzc3dvcmQ=")
                .build();
    }
}
