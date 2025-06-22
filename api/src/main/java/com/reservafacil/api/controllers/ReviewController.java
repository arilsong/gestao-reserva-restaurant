package com.reservafacil.api.controllers;

import com.reservafacil.api.dto.request.RespondToReviewDto;
import com.reservafacil.api.dto.request.ReviewRequestDto;
import com.reservafacil.api.dto.response.ReviewResponseDto;
import com.reservafacil.api.services.impl.ReviewServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/v1/api/review")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewServiceImpl reviewService;

    @PostMapping("/{restaurantId}")
    public ResponseEntity<ReviewResponseDto> createReview(@RequestBody ReviewRequestDto reviewRequestDto, @PathVariable UUID restaurantId){
        ReviewResponseDto review = reviewService.createReview(reviewRequestDto,restaurantId);
        return ResponseEntity.status(HttpStatus.CREATED).body(review);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReviewResponseDto> getReview(@PathVariable UUID id){
        Optional<ReviewResponseDto> review = reviewService.getReview(id);
        return review.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReviewResponseDto> updateReview(@RequestBody @Valid ReviewRequestDto reviewRequestDto, @PathVariable UUID id){
        ReviewResponseDto updatedReview = reviewService.updateReview(reviewRequestDto, id);
        return ResponseEntity.ok(updatedReview);
    }

    @PutMapping("/{reviewId}/reply")
    public ResponseEntity<ReviewResponseDto> respondToReview(@RequestBody @Valid RespondToReviewDto respondToReviewDto, @PathVariable UUID reviewId){
        ReviewResponseDto updatedReview = reviewService.respondToReview(reviewId,respondToReviewDto);
        return ResponseEntity.ok(updatedReview);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable UUID id){
        reviewService.deleteReview(id);
        return ResponseEntity.noContent().build();
    }
}
