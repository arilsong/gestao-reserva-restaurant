package com.reservafacil.api.services;


import com.reservafacil.api.dto.request.TablesRequestDto;
import com.reservafacil.api.dto.response.TablesResponseDto;
import com.reservafacil.api.entities.Tables;


import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TablesService {
    TablesResponseDto createTable(TablesRequestDto tablesRequestDto, UUID restaurent_id);

    Optional<TablesResponseDto> getTable(UUID table_id);

    List<TablesResponseDto> getallTables();

    List<TablesResponseDto> getTablesByEmployeeRestaurant();

    Tables updateTable(TablesRequestDto tablesRequestDto, UUID table_id);

    void deleteTable(UUID table_id);
}
