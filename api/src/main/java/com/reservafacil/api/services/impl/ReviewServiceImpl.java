package com.reservafacil.api.services.impl;

import com.reservafacil.api.dto.request.RespondToReviewDto;
import com.reservafacil.api.dto.request.ReviewRequestDto;
import com.reservafacil.api.dto.response.ReviewResponseDto;
import com.reservafacil.api.entities.Client;
import com.reservafacil.api.entities.Restaurant;
import com.reservafacil.api.entities.Review;
import com.reservafacil.api.exceptions.NotFoundException;
import com.reservafacil.api.repositories.ClientRepository;
import com.reservafacil.api.repositories.RestaurantRepository;
import com.reservafacil.api.repositories.ReviewRepository;
import com.reservafacil.api.security.AuthenticatedUserProvider;
import com.reservafacil.api.services.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final ClientRepository clientRepository;
    private final RestaurantRepository restaurantRepository;
    private final AuthenticatedUserProvider userProvider;

    @Override
    public ReviewResponseDto createReview(ReviewRequestDto reviewRequestDto, UUID restaurantId) {
        UUID user_id = userProvider.getAuthenticatedUserId();
        Client client = clientRepository.findById(user_id)
                .orElseThrow(() -> new NotFoundException("User not found"));

        Restaurant restaurant = restaurantRepository.findById(restaurantId)
                .orElseThrow(() -> new NotFoundException("Restaurant not found"));

        Review review = new Review();
        review.setClassification(reviewRequestDto.classification());
        review.setComment(reviewRequestDto.comment());
        review.setClient(client);
        review.setRestaurant(restaurant);
        Review savedReview = reviewRepository.save(review);

        return new ReviewResponseDto(
                savedReview.getId(),
                savedReview.getClassification(),
                savedReview.getClient().getName(),
                savedReview.getComment(),
                savedReview.getRestaurant_response(),
                savedReview.getDate()
        );
    }

    @Override
    public Optional<ReviewResponseDto> getReview(UUID review_id) {
        return Optional.ofNullable(reviewRepository.findById(review_id)
                .map(ReviewResponseDto::fromEntity)
                .orElseThrow(() -> new NotFoundException("Review not found")));
    }

    @Override
    public List<ReviewResponseDto> getAllReview() {
        return reviewRepository.findAll().stream().map(ReviewResponseDto::fromEntity).toList();
    }

    @Override
    public ReviewResponseDto updateReview(ReviewRequestDto reviewRequestDto, UUID review_id) {
        Review review = reviewRepository.findById(review_id)
                .orElseThrow(() -> new NotFoundException("Review not found"));

        review.setClassification(reviewRequestDto.classification());
        review.setComment(reviewRequestDto.comment());

        Review updtedReview = reviewRepository.save(review);

        return new ReviewResponseDto(
                updtedReview.getId(),
                updtedReview.getClassification(),
                updtedReview.getClient().getName(),
                updtedReview.getComment(),
                updtedReview.getRestaurant_response(),
                updtedReview.getDate()

        );
    }

    public ReviewResponseDto respondToReview(UUID review_id, RespondToReviewDto respondToReviewDto){
        Review review = reviewRepository.findById(review_id)
                .orElseThrow(() -> new NotFoundException("Review not found"));

        review.setRestaurant_response(respondToReviewDto.response());

        Review updtedReview = reviewRepository.save(review);

        return new ReviewResponseDto(
                updtedReview.getId(),
                updtedReview.getClassification(),
                updtedReview.getClient().getName(),
                updtedReview.getComment(),
                updtedReview.getRestaurant_response(),
                updtedReview.getDate()
        );
    }

    @Override
    public void deleteReview(UUID review_id) {
        Review review = reviewRepository.findById(review_id)
                .orElseThrow(() -> new NotFoundException("Review not found"));

        reviewRepository.delete(review);
    }
}
