import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { MODULE_OPTIONS_TOKEN } from "../definitions";
import { PawDatabaseModuleConfig } from "../interfaces";
import { HttpClient } from "@triplit/client";
import { schema } from "@pawcapsu/pawdb/schema";

@Injectable()
export class PawDatabaseService {
  public client: HttpClient<typeof schema>;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    configuration: PawDatabaseModuleConfig
  ) {
    this.client = new HttpClient({
      schema,
      serverUrl: configuration.serverUrl,
      token: configuration.token
    });
  };
};
