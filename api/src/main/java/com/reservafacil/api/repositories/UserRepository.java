package com.reservafacil.api.repositories;

import com.reservafacil.api.entities.Client;
import com.reservafacil.api.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);
}
