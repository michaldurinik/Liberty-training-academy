package streams.movies.start;

import streams.movies.shared.Movie;

import java.util.List;

import static streams.movies.shared.Provider.greatActionMovies;

public class Program {
    public static void main(String [] args) {
        List<Movie> movies = greatActionMovies();
        allTheMovieTitles(movies);
        allTheGreatMovieTitles(movies );
        titleAndRatingOfMoviesFrom1984(movies);
        allTheQuotes(movies);
        averageQuoteLength(movies);
        moviesListedByDecade(movies);
        moviesGroupedByRating(movies);
    }

    private static void allTheMovieTitles(List<Movie> movies) {
        System.out.println("The titles of all the movies");
        movies.stream()
                .map(Movie::getTitle)
                .forEach(System.out::println);
    }

    private static void allTheGreatMovieTitles(List<Movie> movies) {
        System.out.println("Titles of all the movies with a rating of GREAT");
    }

    private static void titleAndRatingOfMoviesFrom1984(List<Movie> movies) {
        System.out.println("Title and rating of movies released in 1984");
    }

    private static void allTheQuotes(List<Movie> movies) {
        System.out.println("All the quotes");
    }

    private static void averageQuoteLength(List<Movie> movies) {
        System.out.println("The average length of a quote is");
    }

    private static void moviesListedByDecade(List<Movie> movies) {
        System.out.println("The titles of all the movies from the 1980s");
        System.out.println("The titles of all the movies from the 1990s");
    }

    private static void moviesGroupedByRating(List<Movie> movies) {
        System.out.println("The movies grouped by their rating:");
    }

    private static void printTabbed(String input) {
        System.out.println("\t" + input);
    }

}
