package org.josh.climber.DTO;

import java.time.LocalDateTime;

public record RouteDTO(
        Long routeId,
        String name,
        String grade,
        String style,
        String setter,
        LocalDateTime createdAt
) {}
