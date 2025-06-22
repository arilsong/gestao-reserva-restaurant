package com.reservafacil.api.dto.request;

import com.reservafacil.api.entities.Booking;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

public record BookingRequestDto(
        @NotNull LocalDate date,
        @NotNull Time time,
        @NotNull int numberOfPeople,
        String specialOccasion,
        String specialRequests,
        int confirmationCode,

        String guestName,
        String guestEmail,
        String guestPhone
        )
{
        public Booking toEntity() {
                Booking booking = new Booking();
                booking.setDate(this.date);
                booking.setTime(this.time);
                booking.setNumberOfPeople(this.numberOfPeople);
                booking.setSpecialOccasion(this.specialOccasion);
                booking.setSpecialRequests(this.specialRequests);
                booking.setConfirmationCode(this.confirmationCode);
                return booking;
        }
}
