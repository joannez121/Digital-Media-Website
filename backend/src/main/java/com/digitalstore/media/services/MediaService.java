package com.digitalstore.media.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.digitalstore.media.models.Movie;
import com.digitalstore.media.models.TVShow;
import com.digitalstore.media.repositories.MediaRepository;

@Service
public class MediaService {
    @Autowired
    private MediaRepository repository;

    public List<Movie> getMovies() {
        return repository.findAllMovies();
    }

    public List<TVShow> getTVShows() {
        return repository.findAllTvShows();
    }

    public TVShow getTVShowById(String id) {
        return repository.findByTVShowId(id);
    }

    public Movie getMovieById(String id) {
        return repository.findByMovieId(id);
    }

    public boolean deleteById(String id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        } 
        return false;
    }

    public List<Movie> getFeaturedMovies() {
        return repository.findMoviesByFeatured();
    }

    public List<TVShow> getFeaturedTVShows() {
        return repository.findTVShowsByFeatured();
    }

    public Movie updateMovie(Movie updatedMovie, String id) {
        if (repository.existsById(id)) {
            Movie movie = getMovieById(id);

            if (updatedMovie.getTitle() != null) movie.setTitle(updatedMovie.getTitle());
            if (updatedMovie.getSynopsis() != null) movie.setSynopsis(updatedMovie.getSynopsis());
            if (updatedMovie.getMainPoster() != null) movie.setMainPoster(updatedMovie.getMainPoster());
            if (updatedMovie.getAltPoster() != null) movie.setAltPoster(updatedMovie.getAltPoster());
            if (updatedMovie.getCountry() != null) movie.setCountry(updatedMovie.getCountry());
            if (updatedMovie.getPurchasePrice() != 0) movie.setPurchasePrice(updatedMovie.getPurchasePrice());
            if (updatedMovie.getRentPrice() != 0) movie.setRentPrice(updatedMovie.getRentPrice());
            if (updatedMovie.getReleasedDate() != null) movie.setReleasedDate(updatedMovie.getReleasedDate());
            if (updatedMovie.getGenres() != null && !updatedMovie.getGenres().isEmpty()) movie.setGenres(updatedMovie.getGenres());
            if (updatedMovie.getType() != null) movie.setType(updatedMovie.getType());
            if (updatedMovie.getFeatured() != null) movie.setType(updatedMovie.getType());
            if (updatedMovie.getLength() != 0) movie.setLength(updatedMovie.getLength());

            Movie newMovie = repository.save(movie);
            return newMovie;
        } else {
            return null;
        }
    }

    public TVShow updateTVShow(TVShow updatedTVShow, String id) {
        if (repository.existsById(id)) {
            TVShow tvshow = getTVShowById(id);

            if (updatedTVShow.getTitle() != null) tvshow.setTitle(updatedTVShow.getTitle());
            if (updatedTVShow.getSynopsis() != null) tvshow.setSynopsis(updatedTVShow.getSynopsis());
            if (updatedTVShow.getMainPoster() != null) tvshow.setMainPoster(updatedTVShow.getMainPoster());
            if (updatedTVShow.getAltPoster() != null) tvshow.setAltPoster(updatedTVShow.getAltPoster());
            if (updatedTVShow.getCountry() != null) tvshow.setCountry(updatedTVShow.getCountry());
            if (updatedTVShow.getPurchasePrice() != 0) tvshow.setPurchasePrice(updatedTVShow.getPurchasePrice());
            if (updatedTVShow.getRentPrice() != 0) tvshow.setRentPrice(updatedTVShow.getRentPrice());
            if (updatedTVShow.getReleasedDate() != null) tvshow.setReleasedDate(updatedTVShow.getReleasedDate());
            if (updatedTVShow.getGenres() != null && !updatedTVShow.getGenres().isEmpty()) tvshow.setGenres(updatedTVShow.getGenres());
            if (updatedTVShow.getType() != null) tvshow.setType(updatedTVShow.getType());
            if (updatedTVShow.getFeatured() != null) tvshow.setType(updatedTVShow.getType());
            if (updatedTVShow.getEps() != 0) tvshow.setEps(updatedTVShow.getEps());

            TVShow newTVShow = repository.save(tvshow);
            return newTVShow;
        } else {
            return null;
        }
    }

    public List<Movie> getMoviesByTitle(String title) {
        return repository.findMoviesContainingTitle(title);
    }

    public List<TVShow> getTVShowsByTitle(String title) {
        return repository.findTVShowsContainingTitle(title);
    }

    public void addMovie(Movie movie) {
        repository.save(movie);
    }

    public void addTVShow(TVShow tvshow) {
        repository.save(tvshow);
    }
}