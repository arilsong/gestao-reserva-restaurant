package com.reservafacil.api.services.impl;

import com.reservafacil.api.dto.request.BookingRequestDto;
import com.reservafacil.api.dto.response.BookingResponseDto;
import com.reservafacil.api.entities.Booking;
import com.reservafacil.api.entities.Client;
import com.reservafacil.api.entities.Employee;
import com.reservafacil.api.entities.Restaurant;
import com.reservafacil.api.exceptions.NotFoundException;
import com.reservafacil.api.repositories.BookingRepository;
import com.reservafacil.api.repositories.ClientRepository;
import com.reservafacil.api.repositories.RestaurantRepository;
import com.reservafacil.api.security.AuthenticatedUserProvider;
import com.reservafacil.api.services.BookingService;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    private final ClientRepository clientRepository;
    private final RestaurantRepository restaurantRepository;
    private final AuthenticatedUserProvider userProvider;


    @Override
    public BookingResponseDto createBooking(BookingRequestDto bookingRequestDto, UUID restaurant_id) {

        UUID user_id = userProvider.getAuthenticatedUserId();
        Client client = clientRepository.findById(user_id)
                .orElseThrow(() -> new NotFoundException("User not found"));

        Restaurant restaurant = restaurantRepository.findById(restaurant_id)
                .orElseThrow(() -> new NotFoundException("Restaurant not found"));


        Booking booking = bookingRequestDto.toEntity();
        booking.setRestaurant(restaurant);
        booking.setClient(client);

        Booking savedBooking = bookingRepository.save(booking);

        return BookingResponseDto.fromEntity(savedBooking);
    }

    @Override
    public Optional<Booking> getBooking(int confirmation_code) {
        Optional<Booking> booking = bookingRepository.findByConfirmationCode(confirmation_code);
        if(booking.isEmpty()){
            throw  new NotFoundException("Booking not found");
        }
        return  booking;
    }

    public List<BookingResponseDto> getBookingRestaurant() {
        UUID user_id = userProvider.getAuthenticatedUserId();

        if(user_id == null){
            throw new NotFoundException("User not found");
        }

        List<Booking> bookings = bookingRepository.findBookingsByEmployeeId(user_id);

        return bookings.stream().map(BookingResponseDto::fromEntity).toList();
    }

    @Override    public List<Booking> getAllBookingResaturant() {
        return List.of();
    }

    @Override
    public BookingResponseDto updateBooking(BookingRequestDto bookingRequestDto, int confirmation_code) {
        Booking booking = bookingRepository.findByConfirmationCode(confirmation_code)
                .orElseThrow(() -> new NotFoundException("Booking not found"));

        Booking upatedBooking = bookingRequestDto.toEntity();
        bookingRepository.save(upatedBooking);

        return BookingResponseDto.fromEntity(booking);
    }

    @Override
    public void deleteBooking(int confirmation_code) {
        Booking booking = bookingRepository.findByConfirmationCode(confirmation_code)
                .orElseThrow(() -> new NotFoundException("Booking not found"));

        bookingRepository.delete(booking);
    }
}
