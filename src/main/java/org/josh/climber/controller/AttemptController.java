package org.josh.climber.controller;

import org.josh.climber.model.AttemptModel;
import org.josh.climber.repository.AttemptRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attempts")
public class AttemptController {

    private final AttemptRepository repo;

    public AttemptController(AttemptRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<AttemptModel> getAllAttempts(){
        return repo.findAll();
    }

    @PostMapping
    public AttemptModel createAttempt(@RequestBody AttemptModel attempt){
        return repo.save(attempt);
    }
}
