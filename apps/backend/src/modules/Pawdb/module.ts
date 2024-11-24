import { Module } from "@nestjs/common";
import { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } from "./definitions";

import * as Services from "./services";

@Module({
  providers: [
    {
      provide: MODULE_OPTIONS_TOKEN,
      useValue: MODULE_OPTIONS_TOKEN,
    },
    ...Object.values(Services),
  ],
  exports: [...Object.values(Services)],
})
export class PawDatabaseModule extends ConfigurableModuleClass {};
