import { Inject, Injectable, OnApplicationBootstrap, OnModuleInit } from "@nestjs/common";
import { MODULE_OPTIONS_TOKEN } from "../definitions";
import { PawDatabaseModuleConfig } from "../interfaces";
import { schema } from "@pawcapsu/pawdb";
import type { HttpClient } from "@triplit/client";

@Injectable()
export class PawDatabaseService implements OnApplicationBootstrap {
  public client: HttpClient<typeof schema>;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private readonly configuration: PawDatabaseModuleConfig
  ) {};

  async onApplicationBootstrap() {
    const triplit = await import("@triplit/client");
    
    this.client = new triplit.HttpClient({
      schema,
      serverUrl: this.configuration.serverUrl,
      token: this.configuration.token
    });
  };
};
