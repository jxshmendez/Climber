package org.josh.climber.repository;

import org.josh.climber.model.AttemptsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttemptsRepository extends JpaRepository<AttemptsModel, Long>{
        AttemptsModel findByAttemptId(Long attemptId);
}

