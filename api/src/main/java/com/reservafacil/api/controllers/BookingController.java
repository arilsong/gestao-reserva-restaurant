package com.reservafacil.api.controllers;

import com.reservafacil.api.dto.request.BookingRequestDto;
import com.reservafacil.api.dto.request.RestaurantRequestDto;
import com.reservafacil.api.dto.response.BookingResponseDto;
import com.reservafacil.api.entities.Booking;
import com.reservafacil.api.entities.Restaurant;
import com.reservafacil.api.services.impl.BookingServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/v1/api/booking")
@RequiredArgsConstructor
public class BookingController {
    private final BookingServiceImpl bookingService;

    @PostMapping("/{restaurant_id}")
    public ResponseEntity<BookingResponseDto> createBooking(@RequestBody @Valid BookingRequestDto bookingRequestDto, @PathVariable UUID restaurant_id){
        BookingResponseDto booking = bookingService.createBooking(bookingRequestDto, restaurant_id);
        return ResponseEntity.status(HttpStatus.CREATED).body(booking);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBooking(@PathVariable int confirmation_code){
        Optional<Booking> booking = bookingService.getBooking(confirmation_code);
        return booking.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/restaurant")
    public ResponseEntity<List<BookingResponseDto>> getBookingRestaurant(){
        List<BookingResponseDto> bookings = bookingService.getBookingRestaurant();
        return ResponseEntity.ok(bookings);
    }

    @PutMapping("/{confirmation_code}")
    public ResponseEntity<BookingResponseDto> updateBooking(@RequestBody @Valid BookingRequestDto bookingRequestDto, @PathVariable int confirmation_code){
        BookingResponseDto updatedBooking = bookingService.updateBooking(bookingRequestDto, confirmation_code);
        return ResponseEntity.ok(updatedBooking);
    }

    @DeleteMapping("/{confirmation_code}")
    public ResponseEntity<Void> deleteBooking(@PathVariable int confirmation_code){
        bookingService.deleteBooking(confirmation_code);
        return ResponseEntity.noContent().build();
    }
}
