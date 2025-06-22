package com.reservafacil.api.repositories;

import com.reservafacil.api.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BookingRepository extends JpaRepository<Booking, UUID> {

    Optional<Booking> findByConfirmationCode(int confirmation_code);

    @Query("SELECT b FROM Booking b " +
            "JOIN b.restaurant r " +
            "JOIN r.employees e " +
            "WHERE e.id = :employeeId")
    List<Booking> findBookingsByEmployeeId(@Param("employeeId") UUID employeeId);
}
