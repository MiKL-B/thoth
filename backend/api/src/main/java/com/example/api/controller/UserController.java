package com.example.api.controller;

import com.example.api.model.User;
import com.example.api.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // Autorise Angular à appeler l'API
public class UserController {

    // private final UserRepository userRepository;

    // public UserController(UserRepository userRepository) {
    //     this.userRepository = userRepository;
    // }

    // @GetMapping
    // public List<User> getAllUsers() {
    //     return userRepository.findAll();
    // }

    // @PostMapping
    // public User createUser(@RequestBody User user) {
    //     return userRepository.save(user);
    // }
    @PostMapping("/auth/register")
    public User register(@RequestBody User user) {
        String email = user.getEmail();
        System.out.println(email);
        return user;
    }
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }
}