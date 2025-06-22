package com.reservafacil.api.services;


import com.reservafacil.api.dto.request.EmployeeRequestDto;
import com.reservafacil.api.entities.Employee;


import java.util.Optional;

public interface EmployeeService {

    Employee createEmployee(EmployeeRequestDto employeeRequestDto);

    Optional<Employee> getEmployee();

    Employee updateEmployee(EmployeeRequestDto employeeRequestDto);

    void deleteEmployee();
}
