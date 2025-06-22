package com.reservafacil.api.controllers;


import com.reservafacil.api.dto.request.EmployeeRequestDto;
import com.reservafacil.api.entities.Employee;
import com.reservafacil.api.services.impl.EmployeeServiceImpl;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/v1/api/employee")
@AllArgsConstructor
public class EmployeeController {
    private final EmployeeServiceImpl employeeService;

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody @Valid EmployeeRequestDto employeeRequestDto){
        Employee employee = employeeService.createEmployee(employeeRequestDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(employee);
    }

    @GetMapping
    public ResponseEntity<Employee> getEmployee(){
        Optional<Employee> user = employeeService.getEmployee();
        return user.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<Employee> updateEmployee(@RequestBody @Valid EmployeeRequestDto employeeRequestDto){
        Employee updatedEmployee = employeeService.updateEmployee(employeeRequestDto);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteEmployee(){
        employeeService.deleteEmployee();
        return ResponseEntity.noContent().build();
    }
}
