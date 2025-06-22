package com.reservafacil.api.dto.response;

import com.reservafacil.api.entities.Booking;
import com.reservafacil.api.entities.Client;
import com.reservafacil.api.enums.ReservationStatus;
import jakarta.validation.constraints.NotBlank;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

public record BookingResponseDto(
        UUID id,
        UUID restaurantId,
        String restaurantName,
        UUID clientId,
        String clientName,
        LocalDate date,
        Time time,
        int numberOfPeople,
        String specialOccasion,
        String specialRequests,
        String phone,
        String email,
        ReservationStatus status,
        int confirmationCode,

        String guestName,
        String guestEmail,
        String guestPhone,

        LocalDateTime createdAt

        ) {
        public static BookingResponseDto fromEntity(Booking booking) {
                return new BookingResponseDto(
                        booking.getId(),
                        booking.getRestaurant().getId(),
                        booking.getRestaurant().getName(),
                        booking.getClient().getId(),
                        booking.getClient().getName(),
                        booking.getDate(),
                        booking.getTime(),
                        booking.getNumberOfPeople(),
                        booking.getSpecialOccasion(),
                        booking.getSpecialRequests(),
                        booking.getGuestPhone(),
                        booking.getGuestEmail(),
                        booking.getStatus(),
                        booking.getConfirmationCode(),


                        booking.getGuestName(),
                        booking.getGuestEmail(),
                        booking.getGuestPhone(),

                        booking.getCreated_at()
                );
        }
}
