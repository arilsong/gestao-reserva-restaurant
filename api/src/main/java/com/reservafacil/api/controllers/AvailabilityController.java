package com.reservafacil.api.controllers;

import com.reservafacil.api.dto.request.AvailabilityRequestDto;
import com.reservafacil.api.entities.Availability;
import com.reservafacil.api.entities.Restaurant;
import com.reservafacil.api.services.impl.AvailabilityServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/v1/api/availability")
@RequiredArgsConstructor
public class AvailabilityController {
    private final AvailabilityServiceImpl availabilityService;

    @PostMapping({"/{restaurant_id}"})
    public ResponseEntity<Availability> createAvailability(
            @RequestBody @Valid AvailabilityRequestDto availabilityRequestDto,
            @PathVariable UUID restaurant_id ){
        Availability availability = availabilityService.createAvailability(availabilityRequestDto, restaurant_id);
        return ResponseEntity.status(HttpStatus.CREATED).body(availability);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Availability> getAvailability(@PathVariable UUID id){
        Optional<Availability> availability = availabilityService.getAvailability(id);
        return availability.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Availability> updateAvailability(@RequestBody @Valid AvailabilityRequestDto requestDto, @PathVariable UUID id){
        Availability updatedAvailability = availabilityService.updateAvailability(requestDto, id);
        return ResponseEntity.ok(updatedAvailability);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAvailability(@PathVariable UUID id){
        availabilityService.deleteAvailability(id);
        return ResponseEntity.noContent().build();
    }
}
