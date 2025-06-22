package com.reservafacil.api.services;


import com.reservafacil.api.dto.request.ClientRequestDto;
import com.reservafacil.api.entities.Client;
import com.reservafacil.api.entities.User;

import java.util.Optional;

public interface ClientService {

    User createUser(ClientRequestDto clientRequestDto);

    Optional<Client> getUser();

    User updateUser(ClientRequestDto clientRequestDto);

    void deleteUser();
}
