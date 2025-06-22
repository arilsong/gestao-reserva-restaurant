package com.reservafacil.api.dto.response;

import com.reservafacil.api.entities.Availability;
import com.reservafacil.api.entities.Client;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.util.UUID;

public record ClientResponseDto(
        UUID id,
        String name,
        String email,
        String phone
) {
    public static ClientResponseDto fromEntity(Client client) {
        return new ClientResponseDto(
                client.getId(),
                client.getName(),
                client.getEmail(),
                client.getPhone()
        );
    }
}
