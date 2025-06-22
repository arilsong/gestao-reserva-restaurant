package com.reservafacil.api.dto.request;

import com.reservafacil.api.entities.Tables;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record TablesRequestDto(
        @NotNull int number,
        @NotNull int capacity,
        @NotBlank String location
) {
    public Tables toEntity() {
        Tables tables = new Tables();
        tables.setNumber(this.number);
        tables.setCapacity(this.capacity);
        tables.setLocation(this.location);
        return tables;
    }
}
