package com.reservafacil.api.repositories;

import com.reservafacil.api.entities.Tables;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TablesRepository extends JpaRepository<Tables, UUID> {
    Optional<Tables> findByNumber(int numeber);
    @Query(value = """
    SELECT t.* FROM tables t
    JOIN restaurant r ON t.restaurant_id = r.id
    JOIN employee e ON e.restaurant_id = r.id
    WHERE e.id = :employeeId
    """, nativeQuery = true)
    List<Tables> findTablesByEmployeeRestaurant(@Param("employeeId") UUID employeeId);

}
