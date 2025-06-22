package com.reservafacil.api.dto.response;

import com.reservafacil.api.entities.Availability;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record AvailabilityResponseDto(
        UUID id,
        String dayOfWeek,
        LocalDateTime start_time,
        LocalDateTime end_time
) {
    public static AvailabilityResponseDto fromEntity(Availability availability) {
        return new AvailabilityResponseDto(
                availability.getId(),
                availability.getDayOfWeek(),
                availability.getStartTime(),
                availability.getEndTime()
        );
    }
}
