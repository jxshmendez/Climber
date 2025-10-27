package org.josh.climber.controller;

import org.josh.climber.model.AttemptsModel;
import org.josh.climber.repository.AttemptsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attempts")
public class AttemptsController {

    private final AttemptsRepository repo;

    public AttemptsController(AttemptsRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<AttemptsModel> getAllAttempts(){
        return repo.findAll();
    }

    @PostMapping
    public AttemptsModel createAttempt(@RequestBody AttemptsModel attempt){
        return repo.save(attempt);
    }
}
