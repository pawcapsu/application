import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthorizationModuleConfig, ConfigInjectionToken } from './config';
import { SupertokensService } from './services/SupertokensService';

@Module({})
export class AuthorizationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }

  static forRoot({
    connectionURI,
    apiKey,
    appInfo,
  }: AuthorizationModuleConfig) {
    return {
      providers: [
        {
          useValue: {
            appInfo,
            connectionURI,
            apiKey,
          },
          provide: ConfigInjectionToken,
        },
        SupertokensService,
      ],
      exports: [],
      imports: [],
      module: AuthorizationModule,
    };
  }
}
