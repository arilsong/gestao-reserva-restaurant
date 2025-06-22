package com.reservafacil.api.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private int nif;
    private String address;
    private String coordinates;
    private String email;
    private String phone;
    private String price_range;
    private String description;
    private String photos;
    @OneToMany(mappedBy = "restaurant", fetch = FetchType.EAGER)
    private List<Tables> tables = new ArrayList<>();
    @OneToMany(mappedBy = "restaurant")
    private List<Employee> employees = new ArrayList<>();
    @OneToMany(mappedBy = "restaurant")
    private List<Review> reviews = new ArrayList<>();
    @OneToMany(mappedBy = "restaurant", fetch = FetchType.EAGER)
    private List<Availability> availabilities = new ArrayList<>();
}
