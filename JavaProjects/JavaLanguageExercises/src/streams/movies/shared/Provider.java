package streams.movies.shared;

import java.util.ArrayList;
import java.util.List;

import static streams.movies.shared.Rating.*;
import static java.time.LocalDate.of;
import static java.time.Month.*;
import static java.util.Arrays.asList;

public class Provider {
    public static List<Movie> greatActionMovies() {
        List<Movie> movies = new ArrayList<>();
        movies.add(new Movie("Conan", GREAT,
                of(1984, JUNE, 29),
                asList("Enough talk!")));
        movies.add(new Movie("Terminator",
                GREAT,
                of(1984, OCTOBER, 26),
                asList("I'll be back.")));
        movies.add(new Movie("Terminator 2",
                BRILLIANT,
                of(1991, JULY, 3),
                asList("Come with me if you want to live.",
                        "Hasta la vista, baby.",
                        "It's in your nature to destroy yourselves.")));
        movies.add(new Movie("Commando",
                SUPERB,
                of(1984, OCTOBER, 4),
                asList("I have to remind you Sully, this is my weak arm!",
                        "I eat Green Berets for breakfast. And right now, I'm very hungry!",
                        "Don't disturb my friend, he's dead tired.",
                        "Come on Bennett, let's party!",
                        "Let off some steam, Bennett.")));
        movies.add(new Movie("Predator",
                LIFE_CHANGING,
                of(1987, JUNE, 12),
                asList("Get to the Chopper!",
                        "Stick around.",
                        "If it bleeds, we can kill it.",
                        "He's using the trees.",
                        "We move, five meter spread, no sound.")));
        movies.add(new Movie("Total Recall",
                GREAT,
                of(1990, JUNE, 1),
                asList("Get your ass to Mars.",
                        "Relax. You'll live longer.",
                        "If I am not me, then who the hell am I?",
                        "Look who's talking.")));
        return movies;
    }
}
