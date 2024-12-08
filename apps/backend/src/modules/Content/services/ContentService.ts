import { Inject, Injectable } from "@nestjs/common";
import { PawDatabaseService } from "src/modules/Pawdb/services";

@Injectable()
export class ContentService {
  constructor(
    private readonly databaseServices: PawDatabaseService,
  ) {}
};
