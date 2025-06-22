package com.reservafacil.api.dto.request;

import com.reservafacil.api.entities.Restaurant;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record RestaurantRequestDto(
        @NotBlank String name,
        @NotNull int nif,
        @NotBlank String address,
        String coordinates,
        @NotBlank @Email String email,
        @NotBlank String phone,
        @NotBlank String price_range,
        @NotBlank String description
) {
    public Restaurant toEntity() {
        Restaurant restaurant = new Restaurant();
        restaurant.setName(this.name);
        restaurant.setNif(this.nif);
        restaurant.setAddress(this.address);
        restaurant.setCoordinates(this.coordinates);
        restaurant.setEmail(this.email);
        restaurant.setPhone(this.phone);
        restaurant.setPrice_range(this.price_range);
        restaurant.setDescription(this.description);
        return restaurant;
    }
}
