package com.reservafacil.api.dto.response;

import com.reservafacil.api.entities.Booking;
import com.reservafacil.api.entities.Restaurant;
import com.reservafacil.api.enums.ReservationStatus;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public record TodayStatsRespondeDto(
        int totalReservations,
        int confirmedReservations,
        int pendingReservations,
        int cancelledReservations
) {


    public static TodayStatsRespondeDto fromEntity(Restaurant restaurant, LocalDate date) {

        List<Booking> bookingsForToday = restaurant.getTables().stream()
                    .flatMap(table -> table.getBookings().stream())
                    .filter(booking -> booking.getDate().isEqual(date))
                    .toList();

            int total = bookingsForToday.size();
            int confirmed = (int) bookingsForToday.stream().filter(b -> b.getStatus() == ReservationStatus.CONFIRMED).count();
            int pending = (int) bookingsForToday.stream().filter(b -> b.getStatus() == ReservationStatus.PENDING).count();
            int cancelled = (int) bookingsForToday.stream().filter(b -> b.getStatus() == ReservationStatus.CANCELLED).count();


            return new TodayStatsRespondeDto(total, confirmed, pending, cancelled);



    }
}
