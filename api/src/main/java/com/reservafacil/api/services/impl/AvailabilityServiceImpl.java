package com.reservafacil.api.services.impl;

import com.reservafacil.api.dto.request.AvailabilityRequestDto;
import com.reservafacil.api.entities.Availability;
import com.reservafacil.api.entities.Restaurant;
import com.reservafacil.api.exceptions.NotFoundException;
import com.reservafacil.api.repositories.AvailabilityRepository;
import com.reservafacil.api.repositories.RestaurantRepository;
import com.reservafacil.api.services.AvailabilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AvailabilityServiceImpl implements AvailabilityService {
    private final RestaurantRepository restaurantRepository;
    private final AvailabilityRepository availabilityRepository;

    @Override
    public Availability createAvailability(AvailabilityRequestDto availabilityRequestDto, UUID restaurant_id) {
        Restaurant restaurant = restaurantRepository.findById(restaurant_id)
                .orElseThrow(() -> new NotFoundException("Restaurant not found"));

        Availability availability = new Availability();
        availability.setRestaurant(restaurant);
        availability.setDayOfWeek(availabilityRequestDto.dayOfWeek());
        availability.setStartTime(availabilityRequestDto.start_time());
        availability.setEndTime(availabilityRequestDto.end_time());

        return availabilityRepository.save(availability);
    }

    @Override
    public Optional<Availability> getAvailability(UUID availability_id) {
        Optional<Availability> availability = availabilityRepository.findById(availability_id);

        if(availability.isEmpty()){
            throw  new NotFoundException("Availability not found");
        }

        return availability;
    }

    @Override
    public Availability updateAvailability(AvailabilityRequestDto availabilityRequestDto, UUID availability_id) {
        Availability availability = availabilityRepository.findById(availability_id)
                .orElseThrow(() -> new NotFoundException("Availability not found"));


        availability.setDayOfWeek(availabilityRequestDto.dayOfWeek());
        availability.setStartTime(availabilityRequestDto.start_time());
        availability.setEndTime(availabilityRequestDto.end_time());


        return availabilityRepository.save(availability);
    }

    @Override
    public void deleteAvailability(UUID availability_id) {
        Availability availability = availabilityRepository.findById(availability_id)
                .orElseThrow(() -> new NotFoundException("Availability not found"));

        availabilityRepository.delete(availability);
    }
}
