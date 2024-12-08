import { Module } from '@nestjs/common';
import { ZitadelAuthModule } from '../Zitadel/module';
import {ConfigModule, ConfigService } from "@nestjs/config";
import * as Joi from "joi";
import { ZitadelAuthModuleConfig } from '../Zitadel/interfaces';

import * as Modules from "../";
import { PawDatabaseModule } from '../Pawdb/module';
import { PawDatabaseModuleConfig } from '../Pawdb/interfaces';

@Module({
  imports: [
    // .env configuration loader and schema
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        // Database provider
        PAWDB_SERVER_URL: Joi.string().required(),
        PAWDB_TOKEN: Joi.string().required(),
        PAWDB_JWT_SECRET: Joi.string().required(),

        // Authorization provider
        IDP_AUTHORITY: Joi.string().required(),
        IDP_AUTHORIZATION_TYPE: Joi.string()
          .valid('jwt-profile')
          .default('jwt-profile')
          .optional(),
        IDP_AUTHORIZATION_PROFILE_TYPE: Joi.string()
          .valid('application')
          .default('application')
          .optional(),
        IDP_AUTHORIZATION_PROFILE_KEY_ID: Joi.string().required(),
        IDP_AUTHORIZATION_PROFILE_KEY: Joi.string().required(),
        IDP_AUTHORIZATION_PROFILE_APP_ID: Joi.string().required(),
        IDP_AUTHORIZATION_PROFILE_CLIENT_ID: Joi.string().required(),
      }),
    }),

    // Zitadel Authorization Provider
    ZitadelAuthModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService): ZitadelAuthModuleConfig => {
        return {
          authority: config.getOrThrow<string>('IDP_AUTHORITY'),
          authorization: {
            type: config.getOrThrow<'jwt-profile'>('IDP_AUTHORIZATION_TYPE'),
            profile: {
              type: config.getOrThrow<'application'>(
                'IDP_AUTHORIZATION_PROFILE_TYPE',
              ),
              keyId: config.getOrThrow<string>(
                'IDP_AUTHORIZATION_PROFILE_KEY_ID',
              ),
              key: config.getOrThrow<string>('IDP_AUTHORIZATION_PROFILE_KEY'),
              appId: config.getOrThrow<string>(
                'IDP_AUTHORIZATION_PROFILE_APP_ID',
              ),
              clientId: config.getOrThrow<string>(
                'IDP_AUTHORIZATION_PROFILE_CLIENT_ID',
              ),
            },
          },
        };
      },
      inject: [ConfigService],
    }),

    // Database configuration
    PawDatabaseModule.forRootAsync({
      imports: [ConfigService],
      useFactory: (config: ConfigService): PawDatabaseModuleConfig => {
        return {
          serverUrl: config.getOrThrow<string>('PAWDB_SERVER_URL'),
          token: config.getOrThrow<string>('PAWDB_TOKEN'),
          jwtSecret: config.getOrThrow<string>('PAWDB_JWT_SECRET'),
        };
      },
      inject: [ConfigService],
    }),

    // Importing all other modules
    ...Object.values(Modules)
  ],
  controllers: [],
  providers: [ConfigService],
})
export class ApplicationModule {}
