import { Schema as S } from "@triplit/client";

// ScrapperProcess info
export const ScrapperInfoPart = S.Record({
  scrappedOn: S.Date(),
  source: S.String(),
});
