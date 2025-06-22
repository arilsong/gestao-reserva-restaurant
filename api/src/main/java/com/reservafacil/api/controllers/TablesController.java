package com.reservafacil.api.controllers;

import com.reservafacil.api.dto.request.ClientRequestDto;
import com.reservafacil.api.dto.request.TablesRequestDto;
import com.reservafacil.api.dto.response.TablesResponseDto;
import com.reservafacil.api.entities.Tables;
import com.reservafacil.api.services.impl.TablesServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/v1/api/table")
@RequiredArgsConstructor
public class TablesController {
    private final TablesServiceImpl tablesService;

    @PostMapping("/{restaurant_id}")
    public ResponseEntity<TablesResponseDto> createTable(@RequestBody TablesRequestDto tablesRequestDto, @PathVariable UUID restaurant_id){
        TablesResponseDto tables = tablesService.createTable(tablesRequestDto, restaurant_id);
        return ResponseEntity.status(HttpStatus.CREATED).body(tables);
    }

    @GetMapping("/{table_id}")
    public ResponseEntity<TablesResponseDto> getTable(@PathVariable UUID table_id){
        Optional<TablesResponseDto> table = tablesService.getTable(table_id);
        return table.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());

    }

    @GetMapping("/tables-restaurant")
    public List<TablesResponseDto> getTablesByEmployeeRestaurant(){
        return tablesService.getTablesByEmployeeRestaurant();
    }

    @PutMapping("/{table_id}")
    public ResponseEntity<Tables> updateTable(@RequestBody @Valid TablesRequestDto tablesRequestDto, @PathVariable UUID table_id){
        Tables updatedTable = tablesService.updateTable(tablesRequestDto, table_id);
        return ResponseEntity.ok(updatedTable);
    }


    @DeleteMapping("/{table_id}")
    public ResponseEntity<Tables> deleteTable(@PathVariable UUID table_id){
        tablesService.deleteTable(table_id);
        return ResponseEntity.noContent().build();
    }
}
