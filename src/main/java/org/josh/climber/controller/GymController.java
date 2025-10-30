package org.josh.climber.controller;

import org.josh.climber.DTO.GymDTO;
import org.josh.climber.model.GymModel;
import org.josh.climber.service.GymService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gyms")
public class GymController {

    private final GymService gymService;

    public GymController(GymService gymService) {
        this.gymService = gymService;
    }

    @GetMapping("/{gymId}")
    public GymDTO findByGymId(@PathVariable Long gymId){
        return gymService.findByGymId(gymId);
    }

    @GetMapping
    public List<GymDTO> getAllGyms(){
        return gymService.getAllGyms();
    }

    @PostMapping
    public GymModel createGym(GymModel gym){
        return gymService.createGym(gym);
    }

}
