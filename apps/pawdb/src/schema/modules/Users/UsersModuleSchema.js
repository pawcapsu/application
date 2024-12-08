"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModuleSchema = void 0;
const client_1 = require("@triplit/client");
const ContentModuleSchema_1 = require("../Content/ContentModuleSchema");
exports.UsersModuleSchema = {
    users: {
        schema: client_1.Schema.Schema({
            id: client_1.Schema.Id(),
            posts: client_1.Schema.RelationMany(ContentModuleSchema_1.ContentModuleTables.ContentContainers, {
                where: [["creator_id", "=", "$id"]]
            })
        }),
    }
};
//# sourceMappingURL=UsersModuleSchema.js.map