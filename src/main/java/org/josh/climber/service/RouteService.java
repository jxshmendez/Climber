package org.josh.climber.service;

import org.josh.climber.DTO.RouteDTO;
import org.josh.climber.DTOMapper.RouteDTOMapper;
import org.josh.climber.model.RouteModel;
import org.josh.climber.repository.RouteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RouteService {

    private final RouteRepository routeRepo;
    private final RouteDTOMapper mapper;

    public RouteService(RouteRepository routeRepo, RouteDTOMapper mapper) {
        this.routeRepo = routeRepo;
        this.mapper = mapper;
    }

    public RouteDTO findByRouteId(Long routeId){
        RouteModel route =  routeRepo.findByRouteId(routeId)
                .orElseThrow(() -> new RuntimeException("Route not found: " + routeId));
        return mapper.toDTO(route);
    }

    public List<RouteDTO> getAllRoutes(){
        return routeRepo.findAll()
                .stream()
                .map(mapper::toDTO)
                .toList();
    }

    public RouteModel createRoute(RouteModel route){
        return routeRepo.save(route);
    }
}
