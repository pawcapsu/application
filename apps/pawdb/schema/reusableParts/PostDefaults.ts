import { Schema as S } from "@triplit/client";
import { ScrapperInfoPart } from "./ScrapperInfoPart";
import { ContentModuleTables } from "../modules/Content/ContentModuleSchema";

export function PostDefaults(schema: S) {
  return S.Schema({
    // Post defaults values
    id: S.Id(),
    scrapper_info: S.Optional(ScrapperInfoPart),
    container_id: S.String(),
    container: S.RelationById(ContentModuleTables.ContentContainers, "$container_id"),

    // User-specified fields
    ...schema,
  });
};
