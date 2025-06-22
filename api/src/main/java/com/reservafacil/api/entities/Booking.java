package com.reservafacil.api.entities;

import com.reservafacil.api.enums.ReservationStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "restaurant_id")
    Restaurant restaurant;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "client_id")
    Client client;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "table_id")
    private Tables tables;

    private LocalDate date;
    private Time time;
    private int numberOfPeople;
    private String specialOccasion;
    private String specialRequests;
    private int confirmationCode;
    @Enumerated(EnumType.STRING)
    private ReservationStatus status;

    private String guestName;
    private String guestEmail;
    private String guestPhone;

    private LocalDateTime created_at = LocalDateTime.now();
}
