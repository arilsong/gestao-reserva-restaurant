package com.reservafacil.api.dto.response;


import com.reservafacil.api.entities.Tables;

import java.util.UUID;

public record TablesResponseDto (
        UUID id,
        int number,
        int capacity,
        String location,
        boolean available
){
    public static TablesResponseDto fromEntity(Tables table) {
        return new TablesResponseDto(
                table.getId(),
                table.getNumber(),
                table.getCapacity(),
                table.getLocation(),
                table.isStatus()
        );
    }
}
