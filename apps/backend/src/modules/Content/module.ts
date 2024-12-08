import { Module } from "@nestjs/common";

import * as Services from "./services";

@Module({
  imports: [],
  providers: [...Object.values(Services)],
  exports: [...Object.values(Services)],
})
export class ContentModule {};
