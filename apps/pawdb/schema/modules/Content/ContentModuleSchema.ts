import { Schema as S } from "@triplit/client";
import { ClientSchema } from "@triplit/client";
import { PostDefaults } from "../../reusableParts";

// Const names
export enum ContentModuleTables {
  ContentContainers = "content_containers",

  MediaContent = "media_content",
  StoryContent = "story_content",
};

// Schema
export const ContentModuleSchema = {
  // Content container can contain 
  [ContentModuleTables.ContentContainers]: {
    schema: S.Schema({
      id: S.Id(),

      // Content relations
      content_type: S.String({ enum: ['media', 'story'] as const }),
      content_id: S.String(),

      // Creator meta
      creator_id: S.String(),
      created_by: S.RelationOne("users", {
        where: [["id", "=", "$creator_id"]],
      })
    })
  },

  // media (image or video)
  [ContentModuleTables.MediaContent]: {
    schema: PostDefaults({
      
    }),
  },
  // stories
  [ContentModuleTables.StoryContent]: {
    schema: PostDefaults({
      
    }),
  },

  // @todo mediaPools, comics, games (?)
} satisfies ClientSchema;
