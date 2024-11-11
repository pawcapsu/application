import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import supertokens from 'supertokens-node';
import { ApplicationModule } from './modules/Application/module';
import { SupertokensExceptionFilter } from './modules/Authorization/exceptions';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  // Settings
  app.enableCors({
    origin: [process.env.BASE_URL],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });

  app.useGlobalFilters(new SupertokensExceptionFilter());

  await app.listen(3000);
}

bootstrap();
