package com.reservafacil.api.services;



import com.reservafacil.api.dto.request.RestaurantRequestDto;
import com.reservafacil.api.dto.response.RestaurantResponseDto;
import com.reservafacil.api.entities.Restaurant;

import java.util.Optional;
import java.util.UUID;

public interface RestaurantService {
    Restaurant createRestaurant(RestaurantRequestDto requestDto);

    Optional<RestaurantResponseDto> getRestaurant(UUID id);

    Restaurant updateRestaurant(RestaurantRequestDto restaurantDto, UUID id);

    void deleteRestaurant(UUID id);
}
