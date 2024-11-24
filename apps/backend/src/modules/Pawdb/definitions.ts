import { ConfigurableModuleBuilder } from "@nestjs/common";
import { PawDatabaseModuleConfig } from "./interfaces";

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<PawDatabaseModuleConfig>()
    .setClassMethodName('forRoot')
    .build();
