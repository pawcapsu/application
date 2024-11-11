import { AppInfo } from 'supertokens-node/types';

export const ConfigInjectionToken = 'ConfigInjectionToken';

export type AuthorizationModuleConfig = {
  appInfo: AppInfo;
  connectionURI: string;
  apiKey?: string;
};
