package com.reservafacil.api.security.jwt;

import com.reservafacil.api.dto.response.JWTRespondeDto;
import com.reservafacil.api.entities.User;
import com.reservafacil.api.exceptions.InvalidCredentialsException;
import com.reservafacil.api.repositories.UserRepository;
import com.reservafacil.api.security.CookieUtil;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("v1/api/authenticate")
@Slf4j
public class JWTController {
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;
    private final CookieUtil cookieUtil;
    private final UserRepository userRepository;

    @PostMapping
    public ResponseEntity<JWTRespondeDto> authenticateUser(
            @RequestBody @Valid JWTAuthenticationRequest authRequest,
            HttpServletResponse response) {

        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(
                            authRequest.getEmail(),
                            authRequest.getPassword()));

            String token = jwtService.getGenaretedToken(authRequest.getEmail());

            // Define APENAS o cookie - não retorna o token na resposta
            cookieUtil.createAuthenticationCookie(response, token);

            Optional<User> user = userRepository.findByEmail(authRequest.getEmail());

            JWTRespondeDto jwtRespondeDto =  JWTRespondeDto.fromEntity(user.orElse(null), "Authentication successful");

            return ResponseEntity.ok(jwtRespondeDto);

        } catch (BadCredentialsException ex) {
            log.warn("Tentativa de login inválida para: {}", authRequest.getEmail());
            throw new InvalidCredentialsException("Invalid user credentials");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<Map<String, String>> logout(HttpServletResponse response) {
        // Remove o cookie de autenticação
        cookieUtil.clearAuthenticationCookie(response);

        log.info("Usuário fez logout");

        return ResponseEntity.ok(Map.of("message", "Logout successful"));
    }

    @PostMapping("/refresh")
    public ResponseEntity<Map<String, String>> refreshToken(
            HttpServletResponse response,
            Authentication authentication) {

        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(401)
                    .body(Map.of("error", "Authentication required"));
        }

        try {
            String email = authentication.getName();
            String newToken = jwtService.getGenaretedToken(email);

            // Atualiza o cookie com o novo token
            cookieUtil.refreshAuthenticationCookie(response, newToken);

            log.info("Token renovado para usuário: {}", email);

            return ResponseEntity.ok(Map.of("message", "Token refreshed successfully"));

        } catch (Exception e) {
            log.error("Erro ao renovar token: {}", e.getMessage());
            return ResponseEntity.status(500)
                    .body(Map.of("error", "Failed to refresh token"));
        }
    }

    @GetMapping("/profile")
    public ResponseEntity<Map<String, Object>> getUserProfile(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(401)
                    .body(Map.of("error", "Authentication required"));
        }

        return ResponseEntity.ok(Map.of(
                "email", authentication.getName(),
                "authorities", authentication.getAuthorities(),
                "authenticated", true
        ));
    }
}