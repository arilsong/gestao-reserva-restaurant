package com.reservafacil.api.services.impl;

import com.reservafacil.api.dto.request.RestaurantRequestDto;
import com.reservafacil.api.dto.response.RestaurantResponseDto;
import com.reservafacil.api.dto.response.TodayStatsRespondeDto;
import com.reservafacil.api.entities.Employee;
import com.reservafacil.api.entities.Restaurant;
import com.reservafacil.api.exceptions.ConflictException;
import com.reservafacil.api.exceptions.NotFoundException;
import com.reservafacil.api.repositories.EmployeRepository;
import com.reservafacil.api.repositories.RestaurantRepository;
import com.reservafacil.api.repositories.UserRepository;
import com.reservafacil.api.security.AuthenticatedUserProvider;
import com.reservafacil.api.services.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {
    private final RestaurantRepository restaurantRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmployeRepository employeRepository;
    private final UserRepository userRepository;
    private final AuthenticatedUserProvider userProvider;

    @Override
    public Restaurant createRestaurant(RestaurantRequestDto restaurantDto) {
        Optional<Restaurant> restaurant = restaurantRepository.findByNif(restaurantDto.nif());

        if(restaurant.isPresent()){
            throw new ConflictException("Restaurant already exist");
        }

        UUID id = userProvider.getAuthenticatedUserId();
        Employee employee = employeRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User not found"));

        Restaurant newRestaurant = new Restaurant();
        newRestaurant.setName(restaurantDto.name());
        newRestaurant.setNif(restaurantDto.nif());
        newRestaurant.setAddress(restaurantDto.address());
        newRestaurant.setCoordinates(restaurantDto.coordinates());
        newRestaurant.setEmail(restaurantDto.email());
        newRestaurant.setPhone(restaurantDto.phone());
        newRestaurant.setPrice_range(restaurantDto.price_range());
        newRestaurant.setDescription(restaurantDto.description());
        newRestaurant.getEmployees().add(employee);

        employee.setRestaurant(newRestaurant);

        return restaurantRepository.save(newRestaurant);
    }

    @Override
    public Optional<RestaurantResponseDto> getRestaurant(UUID id) {
        Optional<Restaurant> restaurant = restaurantRepository.findById(id);
        if(restaurant.isEmpty()){
            throw  new NotFoundException("Restaurant not found");
        }


        return restaurant.map(RestaurantResponseDto::fromEntity);
    }

    public Optional<RestaurantResponseDto> getRestaurantEmplyee() {
        UUID id = userProvider.getAuthenticatedUserId();

        Optional<Restaurant> restaurant = restaurantRepository.findRestaurantByEmployeeId(id);
        if(restaurant.isEmpty()){
            throw  new NotFoundException("Restaurant not found");
        }


        return restaurant.map(RestaurantResponseDto::fromEntity);
    }

    public List<RestaurantResponseDto> getAllRestaurants(){
        List<Restaurant> restaurants = restaurantRepository.findAll();

        return restaurants.stream().map(RestaurantResponseDto::fromEntity).toList();
    }


    public Optional<TodayStatsRespondeDto> getTodayStats(UUID restaurantId, LocalDate localDateTime){
        Optional<Restaurant> restaurant = restaurantRepository.findById(restaurantId);

        return restaurant.map(r -> TodayStatsRespondeDto.fromEntity(r, localDateTime));
    }

    @Override
    public Restaurant updateRestaurant(RestaurantRequestDto restaurantDto, UUID id) {

        Restaurant restaurant = restaurantRepository.findById(id)
                        .orElseThrow(() -> new NotFoundException("Restaurant not found"));

        restaurant.setName(restaurantDto.name());
        restaurant.setNif(restaurantDto.nif());
        restaurant.setAddress(restaurantDto.address());
        restaurant.setCoordinates(restaurantDto.coordinates());
        restaurant.setEmail(restaurantDto.email());
        restaurant.setPhone(restaurantDto.phone());
        restaurant.setPrice_range(restaurantDto.price_range());
        restaurant.setDescription(restaurantDto.description());


        return restaurantRepository.save(restaurant);
    }

    @Override
    public void deleteRestaurant(UUID id) {

        Restaurant restaurant = restaurantRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Restaurant not found"));

        restaurantRepository.delete(restaurant);
    }
}
