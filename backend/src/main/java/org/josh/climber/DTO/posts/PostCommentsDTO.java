package org.josh.climber.DTO.posts;

import java.time.LocalDateTime;

public record PostCommentsDTO(
        Long postCommentId,
        String postCommentText,
        LocalDateTime createdAt,
        Long postId,
        Long userId,
        String username
) {}
