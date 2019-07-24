package demos.spring.mvc;

import org.springframework.http.server.reactive.HttpHandler;
import org.springframework.http.server.reactive.ReactorHttpHandlerAdapter;
import org.springframework.web.reactive.function.server.HandlerFunction;
import org.springframework.web.reactive.function.server.RequestPredicate;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.ipc.netty.http.server.HttpServer;

import java.util.Scanner;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.web.reactive.function.BodyInserters.fromObject;
import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.RouterFunctions.toHttpHandler;

public class Program {
    private static final String HOST = "localhost";
    private static final int PORT = 8080;
    private static final String ENDPOINT = "/endpoint";
    private static final String MSG = "Hello Reactive Spring";

    public static void main(String[] args) {
        HandlerFunction<ServerResponse> func = request -> ServerResponse.ok().body(fromObject(MSG));
        RequestPredicate predicate = GET(ENDPOINT).and(accept(APPLICATION_JSON));
        RouterFunction<ServerResponse> testRoute = route(predicate, func);
        HttpHandler httpHandler = toHttpHandler(testRoute);
        ReactorHttpHandlerAdapter adapter = new ReactorHttpHandlerAdapter(httpHandler);
        HttpServer server = HttpServer.create(HOST, PORT);
        server.newHandler(adapter).block();

        System.out.println("Hit return to exit");
        Scanner scanner = new Scanner(System.in);
        scanner.nextLine();
    }
}
