package com.reservafacil.api.controllers;

import com.reservafacil.api.dto.request.ClientRequestDto;
import com.reservafacil.api.entities.Client;
import com.reservafacil.api.entities.User;
import com.reservafacil.api.services.impl.ClientServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/v1/api/client")
@RequiredArgsConstructor
public class ClientController {
    private final ClientServiceImpl clientService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody @Valid ClientRequestDto clientRequestDto){
        User user = clientService.createUser(clientRequestDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @GetMapping
    public ResponseEntity<Client> getUser(){
        Optional<Client> user = clientService.getUser();
        return user.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody @Valid ClientRequestDto clientRequestDto){
        User updatedUser = clientService.updateUser(clientRequestDto);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteUser(){
        clientService.deleteUser();
        return ResponseEntity.noContent().build();
    }
}
