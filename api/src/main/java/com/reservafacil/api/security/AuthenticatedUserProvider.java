package com.reservafacil.api.security;

import com.reservafacil.api.security.jwt.JWTService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.Objects;
import java.util.UUID;

@Component
@RequiredArgsConstructor
@Slf4j
public class AuthenticatedUserProvider {

    private final JWTService jwtService;

    private String extractTokenFromRequest() {
        HttpServletRequest request = ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder
                .getRequestAttributes())).getRequest();

        // Busca APENAS no cookie
        String token = extractTokenFromCookie(request);
        if (token != null) {
            return token;
        }

        log.warn("JWT Token não encontrado nos cookies para a requisição: {}", request.getRequestURI());
        throw new RuntimeException("JWT Token não encontrado nos cookies");
    }

    private String extractTokenFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("accessToken".equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        }
        return null;
    }

    public String getAuthenticatedEmail() {
        String token = extractTokenFromRequest();
        return jwtService.extractUserNameFromToken(token);
    }

    public UUID getAuthenticatedUserId() {
        String token = extractTokenFromRequest();
        return jwtService.extractUserIdFromToken(token);
    }

    /**
     * Verifica se existe um usuário autenticado
     */
    public boolean isAuthenticated() {
        try {
            String token = extractTokenFromRequest();
            return !token.isEmpty();
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * Retorna o token atual (útil para logs ou debug)
     */
    public String getCurrentToken() {
        return extractTokenFromRequest();
    }
}