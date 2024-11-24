import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } from "./definitions";
import { ZitadelStrategy } from "./strategy";

@Module({
  imports: [PassportModule],
  providers: [
    {
      provide: MODULE_OPTIONS_TOKEN,
      useValue: MODULE_OPTIONS_TOKEN,
    },
    ZitadelStrategy
  ],
  exports: [ZitadelStrategy],
})
export class ZitadelAuthModule extends ConfigurableModuleClass {};
