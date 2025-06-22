package com.reservafacil.api.services.impl;

import com.reservafacil.api.dto.request.TablesRequestDto;
import com.reservafacil.api.dto.response.TablesResponseDto;
import com.reservafacil.api.entities.Employee;
import com.reservafacil.api.entities.Restaurant;
import com.reservafacil.api.entities.Tables;
import com.reservafacil.api.exceptions.ConflictException;
import com.reservafacil.api.exceptions.NotFoundException;
import com.reservafacil.api.repositories.EmployeRepository;
import com.reservafacil.api.repositories.RestaurantRepository;
import com.reservafacil.api.repositories.TablesRepository;
import com.reservafacil.api.security.AuthenticatedUserProvider;
import com.reservafacil.api.services.TablesService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TablesServiceImpl implements TablesService {
    private final TablesRepository tablesRepository;
    private final RestaurantRepository restaurantRepository;
    private final EmployeRepository employeRepository;
    private final AuthenticatedUserProvider userProvider;

    @Override
    public TablesResponseDto createTable(TablesRequestDto tablesRequestDto, UUID restaurent_id) {
        Optional<Tables> user = tablesRepository.findByNumber(tablesRequestDto.number());

        if(user.isPresent()){
            throw new ConflictException("Number Table already exist");
        }

        Restaurant restaurant = restaurantRepository.findById(restaurent_id)
                .orElseThrow(() -> new NotFoundException("Restaurant not found"));

        Tables newTable = new Tables();
        newTable.setNumber(tablesRequestDto.number());
        newTable.setCapacity(tablesRequestDto.capacity());
        newTable.setLocation(tablesRequestDto.location());
        newTable.setRestaurant(restaurant);
        Tables savedTable = tablesRepository.save(newTable);

        return  new TablesResponseDto(
                savedTable.getId(),
                savedTable.getCapacity(),
                savedTable.getNumber(),
                savedTable.getLocation(),
                savedTable.isStatus()
        );
    }

    @Override
    public Optional<TablesResponseDto> getTable(UUID id) {
        Optional<Tables> table = tablesRepository.findById(id);
        if (table.isEmpty()) {
            throw new NotFoundException("Restaurant not found");
        }
        return table.map(tables -> new TablesResponseDto(
                        tables.getId(),
                        tables.getCapacity(),
                        tables.getNumber(),
                        tables.getLocation(),
                        tables.isStatus()
                ));
    }

    @Override
    public List<TablesResponseDto> getallTables() {
        List<Tables> listTables = tablesRepository.findAll();
        return listTables.stream()
                .map(tables -> new TablesResponseDto(
                        tables.getId(),
                        tables.getCapacity(),
                        tables.getNumber(),
                        tables.getLocation(),
                        tables.isStatus()
                )).toList();
    }

    @Override
    public List<TablesResponseDto> getTablesByEmployeeRestaurant() {
        UUID employeeId = userProvider.getAuthenticatedUserId();
        Employee employee = employeRepository.findById(employeeId)
                .orElseThrow(() -> new NotFoundException("Employee not found"));

        List<Tables> listTables = tablesRepository.findTablesByEmployeeRestaurant(employeeId);
        return listTables.stream()
                .map(tables -> new TablesResponseDto(
                        tables.getId(),
                        tables.getCapacity(),
                        tables.getNumber(),
                        tables.getLocation(),
                        tables.isStatus()
                )).toList();
    }

    @Override
    public Tables updateTable(TablesRequestDto tablesRequestDto, UUID table_id) {
        Tables table = tablesRepository.findById(table_id)
                .orElseThrow(() -> new NotFoundException("Table not found"));

        table.setNumber(tablesRequestDto.number());
        table.setCapacity(tablesRequestDto.capacity());
        table.setLocation(tablesRequestDto.location());

        return tablesRepository.save(table);
    }

    @Override
    public void deleteTable(UUID table_id) {
        Tables tables = tablesRepository.findById(table_id)
                .orElseThrow(() -> new NotFoundException("Table not found"));
    }
}
