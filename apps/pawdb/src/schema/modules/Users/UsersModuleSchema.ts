import { Schema as S } from "@triplit/client";
import { ClientSchema } from "@triplit/client";
import { ContentModuleTables } from "../Content/ContentModuleSchema";

export const UsersModuleSchema = {
  users: {
    schema: S.Schema({
      id: S.Id(),

      posts: S.RelationMany(ContentModuleTables.ContentContainers, {
        where: [["creator_id", "=", "$id"]]
      })
    }),
  }
} satisfies ClientSchema;
