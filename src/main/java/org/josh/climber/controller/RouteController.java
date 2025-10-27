package org.josh.climber.controller;

import org.josh.climber.model.RouteModel;
import org.josh.climber.repository.RouteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/routes")
public class RouteController {

    private final RouteRepository repo;

    public RouteController(RouteRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<RouteModel> getAllRoutes(){
        return repo.findAll();
    }

    @PostMapping
    public RouteModel createRoute(@RequestBody RouteModel route){
        return repo.save(route);
    }
}
