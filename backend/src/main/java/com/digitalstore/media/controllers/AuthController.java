package com.digitalstore.media.controllers;

import com.digitalstore.media.CustomizedResponse;
import com.digitalstore.media.models.UserModel;
import com.digitalstore.media.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserModel user, HttpServletRequest request, HttpServletResponse response) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            SecurityContextRepository securityContextRepository = new HttpSessionSecurityContextRepository();
            securityContextRepository.saveContext(SecurityContextHolder.getContext(), request, response);
            
            UserModel authenticatedUser = userRepository.findByUsername(user.getUsername());

            var customResponse = new CustomizedResponse(authenticatedUser.getId(), null);

            return new ResponseEntity(customResponse, HttpStatus.OK);
        } catch (BadCredentialsException ex) {
            var customResponse = new CustomizedResponse( "Invalid username or password", null);
            return new ResponseEntity(customResponse, HttpStatus.CONFLICT);
        }
    }
}
