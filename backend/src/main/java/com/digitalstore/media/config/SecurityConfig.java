package com.digitalstore.media.config;

import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
		.cors(corsCustomizer -> corsCustomizer 
		.configurationSource(corsConfigurationSource()) 
	)		.csrf(csrf -> csrf.disable())
			.securityContext(context -> context.securityContextRepository(new HttpSessionSecurityContextRepository()))
			.sessionManagement(session -> {
                session.sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED);
            })
			.authorizeHttpRequests((authorize) -> authorize
                .requestMatchers("/login", "/register", "/searchmovie**", "/searchtvshow**", "/movie/**", "/tvshow/**", "/allmovies**", "/alltvshows**").permitAll()
				.anyRequest().authenticated())
			.logout((logout) -> logout
                .logoutUrl("/logout") 
                .invalidateHttpSession(true) 
                .clearAuthentication(true)
                .deleteCookies("JSESSIONID")) 
        ;

		return http.build();
	}

	@Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfig = new CorsConfiguration();
        
        corsConfig.setAllowedOrigins(List.of("https://digital-media-website.vercel.app/"));  
        corsConfig.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));  
        corsConfig.setAllowedHeaders(List.of("*"));  
		corsConfig.setAllowCredentials(true); 
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", corsConfig);
        return source;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();  // Automatically configured AuthenticationManager
    }

	@Bean
	public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
	}

}