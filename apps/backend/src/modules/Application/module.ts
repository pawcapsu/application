import { Module } from '@nestjs/common';
import { AuthorizationModule } from '../Authorization/module';

@Module({
  imports: [
    AuthorizationModule.forRoot({
      // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: 'https://try.supertokens.com',
      // apiKey: <API_KEY(if configured)>,
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: 'pawcapsu',
        apiDomain: 'http://localhost:3001',
        websiteDomain: 'http://localhost:3000',
        apiBasePath: '/auth',
        websiteBasePath: '/',
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
