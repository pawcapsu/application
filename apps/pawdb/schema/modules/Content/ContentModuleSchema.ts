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

      // Content tags and other meta-data
      tags: S.Set(S.String()),
      meta: S.Record({
        title: S.Optional(S.String()),
        description: S.Optional(S.String({ default: "No description provided" })),
        isNSFW: S.Boolean({ default: false }),
      }),

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
      image_url: S.Record({
        original_resolution: S.String(),
        high_resolution: S.Optional(S.String()),
        balanced_resolution: S.Optional(S.String()),
        low_resolution: S.Optional(S.String())
      }),
    }),
  },
  // stories
  [ContentModuleTables.StoryContent]: {
    schema: PostDefaults({
      
    }),
  },

  // @todo mediaPools, comics, games (?)
} satisfies ClientSchema;
