package demos.spring.webflux.services;

import demos.spring.webflux.model.Movie;
import demos.spring.webflux.neo4j.Neo4JResponse;
import demos.spring.webflux.neo4j.Neo4JStatement;
import demos.spring.webflux.neo4j.Neo4JStatementList;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.ReactiveHttpOutputMessage;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.BodyInserter;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.util.Arrays;

@RestController
public class ClientService {
    private WebClient client;
    private final ParameterizedTypeReference<Neo4JResponse<Movie>> typeRef;
    private final String query = "MATCH (m:Movie) RETURN m LIMIT 50";

    private BodyInserter<Neo4JStatementList, ReactiveHttpOutputMessage> buildInserter(String query) {
        Neo4JStatement statement = new Neo4JStatement(query);
        Neo4JStatementList statementList = new Neo4JStatementList(Arrays.asList(statement));
        return BodyInserters.fromObject(statementList);
    }

    public ClientService(WebClient client) {
        typeRef = new ParameterizedTypeReference<Neo4JResponse<Movie>>() {
        };
        this.client = client;
    }

    @GetMapping(value = "/allMovies", produces = "application/json")
    Flux<Movie> findAllMovies() {
        return client
                .post()
                .body(buildInserter(query))
                .retrieve()
                .bodyToFlux(typeRef)
                .map(Neo4JResponse::getResults)
                .flatMap(Flux::fromIterable)
                .flatMap(x -> Flux.fromIterable(x.getData()))
                .flatMap(x -> Flux.fromIterable(x.getRow()));
    }
}
