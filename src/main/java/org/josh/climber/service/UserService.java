package org.josh.climber.service;

import org.josh.climber.DTO.UserDTO;
import org.josh.climber.DTOMapper.UserDTOMapper;
import org.josh.climber.model.UserModel;
import org.josh.climber.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepo;
    private final UserDTOMapper mapper;

    public UserService(UserRepository userRepo, UserDTOMapper mapper) {
        this.userRepo = userRepo;
        this.mapper = mapper;
    }

    public List<UserDTO> getAllUsers(){
        return userRepo.findAll()
                .stream()
                .map(mapper::toDTO)
                .toList();
    }

    public UserDTO findByUsername(String username){
        UserModel user = userRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found: " + username));
        return mapper.toDTO(user);
    }

    public UserModel createUser(UserModel user){
        return userRepo.save(user);
    }




}