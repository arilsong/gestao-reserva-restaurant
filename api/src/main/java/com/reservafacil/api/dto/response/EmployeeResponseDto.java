package com.reservafacil.api.dto.response;

import com.reservafacil.api.dto.request.EmployeeRequestDto;
import com.reservafacil.api.dto.request.ReviewRequestDto;
import com.reservafacil.api.entities.Availability;
import com.reservafacil.api.entities.Employee;
import com.reservafacil.api.entities.Restaurant;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.util.List;
import java.util.UUID;

public record EmployeeResponseDto(
        UUID id,
        String name,
        String email,
        String phone
) {
    public static EmployeeResponseDto fromEntity(Employee employee) {
        return new EmployeeResponseDto(
                employee.getId(),
                employee.getName(),
                employee.getEmail(),
                employee.getPhone()
        );
    }
}
