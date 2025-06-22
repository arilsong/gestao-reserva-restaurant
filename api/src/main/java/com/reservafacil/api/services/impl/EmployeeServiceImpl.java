package com.reservafacil.api.services.impl;

import com.reservafacil.api.dto.request.EmployeeRequestDto;
import com.reservafacil.api.entities.Employee;
import com.reservafacil.api.exceptions.ConflictException;
import com.reservafacil.api.exceptions.NotFoundException;
import com.reservafacil.api.repositories.EmployeRepository;
import com.reservafacil.api.security.AuthenticatedUserProvider;
import com.reservafacil.api.services.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeRepository employeRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticatedUserProvider userProvider;

    @Override
    public Employee createEmployee(EmployeeRequestDto employeeRequestDto) {
        Optional<Employee> employee = employeRepository.findByEmail(employeeRequestDto.email());

        if(employee.isPresent()){
            throw new ConflictException("Email already exist");
        }

        Employee newEmployee = new Employee();
        newEmployee.setName(employeeRequestDto.name());
        newEmployee.setEmail(employeeRequestDto.email());
        newEmployee.setPhone(employeeRequestDto.phone());
        newEmployee.setPassword(passwordEncoder.encode(employeeRequestDto.password()));


        return employeRepository.save(newEmployee);
    }

    @Override
    public Optional<Employee> getEmployee() {
        UUID id = userProvider.getAuthenticatedUserId();
        Optional<Employee> employee = employeRepository.findById(id);
        if(employee.isEmpty()){
            throw  new NotFoundException("User not exist");
        }
        return employee;
    }

    @Override
    public Employee updateEmployee(EmployeeRequestDto employeeRequestDto) {
        UUID id = userProvider.getAuthenticatedUserId();
        Employee employee = employeRepository.findById(id)
                        .orElseThrow(() -> new NotFoundException("User not exist"));

        employee.setName(employeeRequestDto.name());
        employee.setEmail(employeeRequestDto.email());
        employee.setPhone(employeeRequestDto.phone());

        if (employeeRequestDto.password() != null && !employeeRequestDto.password().isBlank()) {
            employee.setPassword(passwordEncoder.encode(employeeRequestDto.password()));
        }

        return employeRepository.save(employee);
    }

    @Override
    public void deleteEmployee() {
        UUID id = userProvider.getAuthenticatedUserId();
        Employee employee = employeRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User not exist"));

        employeRepository.delete(employee);
    }
}
