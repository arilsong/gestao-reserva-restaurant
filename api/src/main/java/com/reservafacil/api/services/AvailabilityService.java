package com.reservafacil.api.services;

import com.reservafacil.api.dto.request.AvailabilityRequestDto;
import com.reservafacil.api.entities.Availability;

import java.util.Optional;
import java.util.UUID;

public interface AvailabilityService {
    Availability createAvailability(AvailabilityRequestDto availabilityRequestDto, UUID restaurant_id);

    Optional<Availability> getAvailability(UUID availability_id);

    Availability updateAvailability(AvailabilityRequestDto availabilityRequestDto, UUID availability_id);
    
    void deleteAvailability(UUID availability_id);
}
