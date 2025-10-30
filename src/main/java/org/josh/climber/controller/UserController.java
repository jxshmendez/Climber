package org.josh.climber.controller;

import org.josh.climber.DTO.UserDTO;
import org.josh.climber.model.UserModel;
import org.josh.climber.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserDTO> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{username}")
    public UserDTO findByUsername(@PathVariable String username ){
        return userService.findByUsername(username);
    }

    @PostMapping
    public UserModel createUser(@RequestBody UserModel user){
        return userService.createUser(user);
    }
}
