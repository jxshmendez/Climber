package org.josh.climber.repository;

import org.josh.climber.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionRepository extends JpaRepository<Session, Long> {
    Session findBySessionId(Long sessionId);
}
