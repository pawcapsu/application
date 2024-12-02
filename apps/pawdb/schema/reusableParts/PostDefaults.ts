import { Schema as S } from "@triplit/client";
import { ScrapperInfoPart } from "./ScrapperInfoPart";

export function PostDefaults(schema: S) {
  return S.Schema({
    // Post defaults values
    id: S.Id(),
    scrapper_info: S.Optional(ScrapperInfoPart),

    // User-specified fields
    ...schema,
  });
};
