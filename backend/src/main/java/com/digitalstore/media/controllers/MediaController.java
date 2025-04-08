package com.digitalstore.media.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.digitalstore.media.models.Media;
import com.digitalstore.media.models.Movie;
import com.digitalstore.media.models.TVShow;
import com.digitalstore.media.services.MediaService;

@RestController
public class MediaController {
    private MediaService service;

    public MediaController(MediaService service) {
        this.service = service;
    }

    @GetMapping("/movies")
    public ResponseEntity getAllMovies() {
        List<Movie> movies = service.getMovies();
        return new ResponseEntity(movies, HttpStatus.OK);
    }

    @GetMapping("/tvshows")
    public ResponseEntity getAllTVShows() {
        List<TVShow> tvshows = service.getTVShows();
        return new ResponseEntity(tvshows, HttpStatus.OK);
    }

    @GetMapping("/tvshow/{id}")
    public ResponseEntity getTVShow(@PathVariable("id") String id) {
        TVShow tvshow = service.getTVShowById(id);
        if (tvshow == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(tvshow, HttpStatus.OK);
    }

    @GetMapping("/movie/{id}")
    public ResponseEntity getMovie(@PathVariable("id") String id) {
        Movie movie = service.getMovieById(id);
        if (movie == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(movie, HttpStatus.OK);
    }

    @DeleteMapping("/movie/{id}")
    public ResponseEntity deleteMovie(@PathVariable("id") String id) {
        boolean deleted = service.deleteById(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }    
    } 

    @DeleteMapping("/tvshow/{id}")
    public ResponseEntity deleteTVShow(@PathVariable("id") String id) {
        boolean deleted = service.deleteById(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
        }     
    } 

    @GetMapping("/allmovies")
    public ResponseEntity getFeaturedMovies(@RequestParam(value = "featured", defaultValue = "true") Boolean featured) {
        List<Movie> movies = service.getFeaturedMovies();
        return new ResponseEntity(movies, HttpStatus.OK);
    }

    @GetMapping("/alltvshows")
    public ResponseEntity getFeaturedTVShows(@RequestParam(value = "featured", defaultValue = "true") Boolean featured) {
        List<TVShow> tvshows = service.getFeaturedTVShows();
        return new ResponseEntity(tvshows, HttpStatus.OK);
    }

    @PutMapping("/movie/{id}")
    public ResponseEntity updateMovie(@PathVariable("id") String id, @RequestBody Movie updatedMovie) {
        Movie newMovie = service.updateMovie(updatedMovie, id);
        if (newMovie != null) {
            return new ResponseEntity<>(newMovie, HttpStatus.OK); 
        } else {
            return new ResponseEntity<>("Movie id " + id + " not found", HttpStatus.NOT_FOUND); 
        }    
    } 

    @PutMapping("/tvshow/{id}")
    public ResponseEntity updateTVShow(@PathVariable("id") String id, @RequestBody TVShow updatedTVShow) {
        TVShow newTVShow = service.updateTVShow(updatedTVShow, id);
        if (newTVShow != null) {
            return new ResponseEntity<>(newTVShow, HttpStatus.OK); 
        } else {
            return new ResponseEntity<>("TVShow id " + id + " not found", HttpStatus.NOT_FOUND); 
        }    
    } 

    @GetMapping("/searchmovies")
    public ResponseEntity searchMovies( @RequestParam(value = "title") String title) {
        List<Movie> movies = service.getMoviesByTitle(title);
        return new ResponseEntity(movies, HttpStatus.OK);
    }

    @GetMapping("/searchtvshows")
    public ResponseEntity searchTVShows( @RequestParam(value = "title") String title) {
        List<TVShow> tvshows = service.getTVShowsByTitle(title);
        return new ResponseEntity(tvshows, HttpStatus.OK);
    }

    @PostMapping("/movie")
    public ResponseEntity createMovie( @RequestBody Movie newMovie) {
        service.addMovie(newMovie);
        return new ResponseEntity<>(newMovie, HttpStatus.CREATED);
    }

    @PostMapping("/tvshow")
    public ResponseEntity createTVShow( @RequestBody TVShow newTVShow) {
        service.addTVShow(newTVShow);
        return new ResponseEntity<>(newTVShow, HttpStatus.CREATED);
    }

}
