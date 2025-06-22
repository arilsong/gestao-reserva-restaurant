package com.reservafacil.api.services;

import com.reservafacil.api.dto.request.ReviewRequestDto;
import com.reservafacil.api.dto.response.ReviewResponseDto;
import com.reservafacil.api.entities.Review;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ReviewService {
    ReviewResponseDto createReview(ReviewRequestDto reviewRequestDto, UUID restaurantId);

    Optional<ReviewResponseDto> getReview(UUID review_id);

    List<ReviewResponseDto> getAllReview();

    ReviewResponseDto updateReview(ReviewRequestDto reviewRequestDto, UUID review_id);
    
    void deleteReview(UUID review_id);
}
