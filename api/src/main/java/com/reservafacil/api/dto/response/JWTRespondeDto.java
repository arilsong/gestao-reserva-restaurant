package com.reservafacil.api.dto.response;



import com.reservafacil.api.entities.User;

import java.util.Optional;

public record JWTRespondeDto(
        String message,
        Optional<UserResponseDto> user
) {
    public static JWTRespondeDto fromEntity(User user,String message) {
        return new JWTRespondeDto(
                message,
                Optional.ofNullable(user).map(UserResponseDto::fromEntity)
        );
    }
}
