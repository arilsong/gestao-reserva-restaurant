package com.reservafacil.api.dto.response;

import com.reservafacil.api.entities.User;
import com.reservafacil.api.enums.Role;

import java.util.Set;
import java.util.UUID;

public record UserResponseDto(
        UUID id,
        String name,
        String email,
        String phone,
        Set<Role> roles
) {
    public static UserResponseDto fromEntity(User user) {
        return new UserResponseDto(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPhone(),
                user.getRoles()
        );
    }
}
