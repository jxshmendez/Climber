package org.josh.climber.DTOMapper.posts;

import org.josh.climber.DTO.posts.PostCommentsDTO;
import org.josh.climber.model.posts.PostCommentsModel;

public class PostCommentsDTOMapper {

    public static PostCommentsDTO toDTO(PostCommentsModel comment) {
        if (comment == null) return null;

        return new PostCommentsDTO(
                comment.getPostCommentsId(),
                comment.getPostCommentText(),
                comment.getCreatedAt(),
                comment.getPosts().getPostId(),
                comment.getUser().getUserId(),
                comment.getUser().getUsername()
        );
    }
}
