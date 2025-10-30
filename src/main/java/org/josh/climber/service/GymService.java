package org.josh.climber.service;

import org.josh.climber.DTO.GymDTO;
import org.josh.climber.DTOMapper.GymDTOMapper;
import org.josh.climber.model.GymModel;
import org.josh.climber.repository.GymRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GymService {

    private final GymRepository gymRepo;
    private final GymDTOMapper mapper;

    public GymService(GymRepository gymRepo, GymDTOMapper mapper) {
        this.gymRepo = gymRepo;
        this.mapper = mapper;
    }

    public GymDTO findByGymId(Long gymId){
        GymModel gym = gymRepo.findByGymId(gymId)
                .orElseThrow(() -> new RuntimeException("Gym not found: " + gymId));
        return mapper.toDTO(gym);
    }

    public List<GymDTO> getAllGyms(){
        return gymRepo.findAll()
                .stream()
                .map(mapper::toDTO)
                .toList();
    }

    public GymModel createGym(GymModel gym){
        return gymRepo.save(gym);
    }
}
