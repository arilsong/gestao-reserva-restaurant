package com.reservafacil.api.entities;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Client extends User{


    @OneToMany(mappedBy = "client")
    private List<Booking> bookings = new ArrayList<>();

    @OneToMany(mappedBy = "client")
    private List<Review> reviews = new ArrayList<>();
}
