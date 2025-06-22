package com.reservafacil.api.dto.request;

import com.reservafacil.api.entities.Employee;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record EmployeeRequestDto(
        @NotBlank String name,
        @NotBlank @Email String email,
        @NotBlank String phone,
        @NotBlank String password
) {
    public Employee toEntity() {
        Employee employee = new Employee();
        employee.setName(this.name);
        employee.setEmail(this.email);
        employee.setPhone(this.phone);
        employee.setPassword(this.password);
        return employee;
    }
}
