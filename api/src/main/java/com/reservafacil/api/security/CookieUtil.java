package com.reservafacil.api.security;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CookieUtil {

    @Value("${app.security.cookie.domain:}")
    private String cookieDomain;

    @Value("${app.security.cookie.secure:true}")
    private boolean secureCookie;

    private static final String ACCESS_TOKEN_COOKIE_NAME = "accessToken";
    private static final int ACCESS_TOKEN_MAX_AGE = 24 * 60 * 60; // 24 horas

    /**
     * Cria o cookie de autenticação com o token JWT.
     */
    public void createAuthenticationCookie(HttpServletResponse response, String token) {
        Cookie cookie = new Cookie(ACCESS_TOKEN_COOKIE_NAME, token);

        cookie.setHttpOnly(true); // Protege contra XSS
        cookie.setSecure(secureCookie); // Usa HTTPS conforme configuração
        cookie.setPath("/"); // Válido para toda a aplicação
        cookie.setMaxAge(ACCESS_TOKEN_MAX_AGE); // Expira em 24h

        // Define domínio se estiver configurado
        if (!cookieDomain.isEmpty()) {
            cookie.setDomain(cookieDomain);
        }

        response.addCookie(cookie);
    }

    /**
     * Remove o cookie de autenticação.
     */
    public void clearAuthenticationCookie(HttpServletResponse response) {
        Cookie cookie = new Cookie(ACCESS_TOKEN_COOKIE_NAME, null);

        cookie.setPath("/");
        cookie.setHttpOnly(true); // Mantenha consistente
        cookie.setSecure(secureCookie);
        cookie.setMaxAge(0); // Expira imediatamente

        if (!cookieDomain.isEmpty()) {
            cookie.setDomain(cookieDomain);
        }

        response.addCookie(cookie);
    }

    /**
     * Atualiza o cookie com um novo token (para refresh).
     */
    public void refreshAuthenticationCookie(HttpServletResponse response, String newToken) {
        // Não precisa remover manualmente, apenas sobrescreve
        createAuthenticationCookie(response, newToken);
    }
}
