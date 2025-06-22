package com.reservafacil.api.dto.response;

import com.reservafacil.api.dto.request.EmployeeRequestDto;
import com.reservafacil.api.dto.request.ReviewRequestDto;
import com.reservafacil.api.entities.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.UUID;

public record RestaurantResponseDto(
        UUID id,
        String name,
        int nif,
        String address,
        String coordinates,
        String email,
        String phone,
        String price_range,
        String description,

        Double rating,
        Integer totalReviews,


        List<TablesResponseDto> tables,
        List<EmployeeResponseDto> employees,
        List<ReviewResponseDto> reviews,
        List<AvailabilityResponseDto> availability
) {
    public static RestaurantResponseDto fromEntity(Restaurant restaurant) {
        Double calculatedRating = null;
        Integer totalReviewsCount = null;

        // Calcular rating
        if (restaurant.getReviews() != null && !restaurant.getReviews().isEmpty()) {
            totalReviewsCount = restaurant.getReviews().size();
            calculatedRating = restaurant.getReviews().stream()
                    .mapToInt(Review::getClassification)
                    .average()
                    .orElse(0.0);
            calculatedRating = Math.round(calculatedRating * 10.0) / 10.0; // arredondar para 1 casa decimal
        }

        // Filtrar mesas disponíveis
        List<TablesResponseDto> availableTablesOnly = restaurant.getTables() != null ?
                restaurant.getTables().stream()
                        .filter(Tables::isStatus) // apenas mesas disponíveis
                        .map(TablesResponseDto::fromEntity)
                        .toList() : List.of();

        return new RestaurantResponseDto(
                restaurant.getId(),
                restaurant.getName(),
                restaurant.getNif(),
                restaurant.getAddress(),
                restaurant.getCoordinates(),
                restaurant.getEmail(),
                restaurant.getPhone(),
                restaurant.getPrice_range(),
                restaurant.getDescription(),

                calculatedRating,
                totalReviewsCount,

                restaurant.getTables().stream()
                        .map(TablesResponseDto::fromEntity)
                        .toList(),
                restaurant.getEmployees().stream()
                        .map(EmployeeResponseDto::fromEntity)
                        .toList(),
                restaurant.getReviews().stream()
                        .map(ReviewResponseDto::fromEntity)
                        .toList(),
                restaurant.getAvailabilities().stream()
                        .map(AvailabilityResponseDto::fromEntity)
                        .toList()
        );
    }
}
