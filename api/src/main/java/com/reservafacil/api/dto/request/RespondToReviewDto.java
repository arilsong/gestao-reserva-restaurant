package com.reservafacil.api.dto.request;

import jakarta.validation.constraints.NotBlank;

public record RespondToReviewDto(
        @NotBlank String response
) {
}
