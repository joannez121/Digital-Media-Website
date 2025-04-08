package com.digitalstore.media.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.digitalstore.media.CustomizedResponse;
import com.digitalstore.media.models.Movie;
import com.digitalstore.media.models.UserModel;
import com.digitalstore.media.services.UserService;

@RestController
public class UserController {
    private UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/user/{id}")
    public ResponseEntity getUser(@PathVariable("id") String id) {
        Optional<UserModel> existingUser = service.getUser(id);
        
        if (!existingUser.isPresent()) {
            var customResponse = new CustomizedResponse("User with id " + id + " does not exist", null);

            return new ResponseEntity(customResponse, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(existingUser, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity addUser(@RequestBody UserModel user) {
        if (service.findByUsername(user.getUsername()) != null) {
            var customResponse = new CustomizedResponse("Username already exists", null);
            return new ResponseEntity(customResponse, HttpStatus.CONFLICT);
        }
        if (service.findByEmail(user.getEmail()) != null) {
            var customResponse = new CustomizedResponse("Email already exists", null);
            return new ResponseEntity(customResponse, HttpStatus.CONFLICT);
        }
        UserModel newUser = service.addUser(user);
        return new ResponseEntity(newUser, HttpStatus.OK);
    }

    @GetMapping("/validate")
    public ResponseEntity getValidation() {
        var customResponse = new CustomizedResponse("authenticated", null);
        return new ResponseEntity(customResponse, HttpStatus.OK);
    }
}
