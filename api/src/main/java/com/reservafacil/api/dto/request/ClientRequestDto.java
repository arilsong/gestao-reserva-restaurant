package com.reservafacil.api.dto.request;

import com.reservafacil.api.entities.Client;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ClientRequestDto(
        @NotBlank String name,
        @NotBlank @Email String email,
        @NotBlank String phone,
        @NotBlank String password
) {
    public Client toEntity() {
        Client client = new Client();
        client.setName(this.name);
        client.setEmail(this.email);
        client.setPhone(this.phone);
        client.setPassword(this.password);
        return client;
    }
}
