package com.reservafacil.api.services.impl;

import com.reservafacil.api.dto.request.ClientRequestDto;
import com.reservafacil.api.entities.Client;
import com.reservafacil.api.entities.User;
import com.reservafacil.api.enums.Role;
import com.reservafacil.api.exceptions.ConflictException;
import com.reservafacil.api.exceptions.NotFoundException;
import com.reservafacil.api.repositories.ClientRepository;
import com.reservafacil.api.security.AuthenticatedUserProvider;
import com.reservafacil.api.services.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements ClientService {
    private final ClientRepository clientRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticatedUserProvider userProvider;

    @Override
    public Client createUser(ClientRequestDto userDto) {
        Optional<Client> user = clientRepository.findByEmail(userDto.email());

        if(user.isPresent()){
            throw new ConflictException("Email already exist");
        }

        Client newUser = new Client();
        newUser.setName(userDto.name());
        newUser.setEmail(userDto.email());
        newUser.setPhone(userDto.phone());
        newUser.setRoles(Set.of(Role.CLIENT));
        newUser.setPassword(passwordEncoder.encode(userDto.password()));

        return clientRepository.save(newUser);
    }

    @Override
    public Optional<Client> getUser() {
        UUID id = userProvider.getAuthenticatedUserId();
        Optional<Client> client = clientRepository.findById(id);
        if(client.isEmpty()){
            throw  new NotFoundException("User not exist");
        }
        return client;
    }

    @Override
    public User updateUser(ClientRequestDto userDto) {
        UUID id = userProvider.getAuthenticatedUserId();
        Client client = clientRepository.findById(id)
                        .orElseThrow(() -> new NotFoundException("User not exist"));

        client.setName(userDto.name());
        client.setEmail(userDto.email());
        client.setPhone(userDto.phone());

        if (userDto.password() != null && !userDto.password().isBlank()) {
            client.setPassword(passwordEncoder.encode(userDto.password()));
        }

        return clientRepository.save(client);
    }

    @Override
    public void deleteUser() {
        UUID id = userProvider.getAuthenticatedUserId();
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User not exist"));

        clientRepository.delete(client);
    }
}
