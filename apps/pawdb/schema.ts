import { Schema as S } from "@triplit/client";
import type { ClientSchema, Roles } from "@triplit/client";

const roles: Roles = {
  admin: {
    match: {
      role: "admin",
    },
  },
  user: {
    match: {
      role: "user",
      userId: "$userId",
    },
  },
};

/**
 * Define your schema here. After:
 * - Pass your schema to your Triplit client
 * - Push your schema to your Triplit server with 'triplit schema push'
 *
 * For more information about schemas, see the docs: https://www.triplit.dev/docs/schemas
 */
export const schema = {
  todos: {
    schema: S.Schema({
      id: S.Id(),
      title: S.String(),
      description: S.String(),
    }),
  },
} satisfies ClientSchema;
