package com.reservafacil.api.config;

import com.reservafacil.api.security.CustomUserDetailsService;
import com.reservafacil.api.security.jwt.JWTAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SpringSecurity {

 private final CustomUserDetailsService customUserDetailsService;
 private final JWTAuthenticationFilter authenticationFilter;
 private final CorsConfig corsConfig;

 @Bean
 public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
  http    .cors(cors -> cors.configurationSource(corsConfig.corsConfigurationSource()))
          .csrf(AbstractHttpConfigurer::disable)
          .authorizeHttpRequests(auth -> auth
                  .requestMatchers(HttpMethod.POST,"/v1/api/client").permitAll()
                  .requestMatchers(HttpMethod.GET,"/v1/api/restaurant/**").permitAll()
                  .requestMatchers(HttpMethod.POST,"/v1/api/employee").permitAll()
                  .requestMatchers(HttpMethod.GET,"/v1/api/images/view/**").permitAll()
                  .requestMatchers(HttpMethod.POST, "/v1/api/authenticate").permitAll()
                  .requestMatchers("/ws/**").permitAll()
                  .anyRequest().authenticated())
          .sessionManagement(session -> session
                  .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
          .authenticationProvider(authProvider())
          .addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);
  return  http.build();
 }


 @Bean
 public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
  return authConfig.getAuthenticationManager();
 }

 @Bean
 public PasswordEncoder passwordEncoder(){
  return new BCryptPasswordEncoder();
 }

 public AuthenticationProvider authProvider(){
  var authenticationProvider = new DaoAuthenticationProvider();
  authenticationProvider.setUserDetailsService(customUserDetailsService);
  authenticationProvider.setPasswordEncoder(passwordEncoder());
  return authenticationProvider;
 }
}