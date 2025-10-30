package org.josh.climber.DTOMapper;

import org.josh.climber.DTO.RouteDTO;
import org.josh.climber.model.RouteModel;
import org.springframework.stereotype.Component;

@Component
public class RouteDTOMapper {

    public RouteDTO toDTO(RouteModel route){
        return new RouteDTO(
                route.getRouteId(),
                route.getName(),
                route.getGrade(),
                route.getStyle(),
                route.getSetter(),
                route.getCreatedAt()
        );
    }
}
