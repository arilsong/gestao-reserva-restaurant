package com.reservafacil.api.dto.request;

import com.reservafacil.api.entities.Review;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ReviewRequestDto(
        @NotNull int classification,
        @NotBlank String comment
) {
    public Review toEntity() {
        Review review = new Review();
        review.setClassification(this.classification);
        review.setComment(this.comment);
        return review;
    }
}
