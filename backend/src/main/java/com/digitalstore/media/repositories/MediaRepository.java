package com.digitalstore.media.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.digitalstore.media.models.Media;
import com.digitalstore.media.models.Movie;
import com.digitalstore.media.models.TVShow;

@Repository
public interface MediaRepository extends MongoRepository<Media, String>{
    @Query("{'type': 'movie'}")
    List<Movie> findAllMovies();

    @Query("{'type': 'tvshow'}")
    List<TVShow> findAllTvShows();

    @Query("{'_id': ?0}")
    Movie findByMovieId(String id);

    @Query("{'_id': ?0}")
    TVShow findByTVShowId(String id);

    @Query("{'featured': true, 'type': 'movie'}")
    List<Movie> findMoviesByFeatured();

    @Query("{'featured': true, 'type': 'tvshow'}")
    List<TVShow> findTVShowsByFeatured();

    @Query("{ 'title': { '$regex': ?0, '$options': 'i' }, 'type': 'movie' }")
    List<Movie> findMoviesContainingTitle(String title);

    @Query("{ 'title': { '$regex': ?0, '$options': 'i' }, 'type': 'tvshow' }")
    List<TVShow> findTVShowsContainingTitle(String title);
}
