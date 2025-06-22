package com.reservafacil.api.repositories;

import com.reservafacil.api.entities.Availability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AvailabilityRepository extends JpaRepository<Availability, UUID> {
}
