package org.josh.climber.DTOMapper.posts;

import org.josh.climber.DTO.posts.PostLikesDTO;
import org.josh.climber.model.posts.PostLikesModel;

public class PostLikesDTOMapper {

    public static PostLikesDTO toDTO(PostLikesModel like){
        if (like == null) return null;

        return new PostLikesDTO(
                like.getUser().getUserId(),
                like.getUser().getUsername()

        );
    }
}
