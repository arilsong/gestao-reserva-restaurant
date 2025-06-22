package com.reservafacil.api.dto.request;


import com.reservafacil.api.entities.Availability;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record AvailabilityRequestDto(
        @NotEmpty String dayOfWeek,
        @NotNull LocalDateTime start_time,
        @NotNull LocalDateTime end_time
) {
    public Availability toEntity() {
        Availability availability = new Availability();
        availability.setDayOfWeek(this.dayOfWeek);
        availability.setStartTime(this.start_time);
        availability.setEndTime(this.end_time);
        return availability;
    }
}
