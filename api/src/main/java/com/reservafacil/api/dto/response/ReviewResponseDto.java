package com.reservafacil.api.dto.response;

import com.reservafacil.api.entities.Employee;
import com.reservafacil.api.entities.Review;

import java.time.LocalDateTime;
import java.util.UUID;

public record ReviewResponseDto(
        UUID id,
        int classification,
        String author,
        String comment,
        String restaurantResponse,
        LocalDateTime date
){
    public static ReviewResponseDto fromEntity(Review review) {
        return new ReviewResponseDto(
                review.getId(),
                review.getClassification(),
                review.getClient().getName(),
                review.getComment(),
                review.getRestaurant_response(),
                review.getDate()
        );
    }
}
