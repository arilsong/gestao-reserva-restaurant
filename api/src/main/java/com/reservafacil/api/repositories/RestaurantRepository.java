package com.reservafacil.api.repositories;

import com.reservafacil.api.entities.Restaurant;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface RestaurantRepository extends JpaRepository<Restaurant, UUID> {
    Optional<Restaurant> findByNif(int nif);

    @Query("SELECT r FROM Restaurant r JOIN Employee e ON e.restaurant = r WHERE e.id = :employeeId")
    Optional<Restaurant> findRestaurantByEmployeeId(@Param("employeeId") UUID employeeId);

}
