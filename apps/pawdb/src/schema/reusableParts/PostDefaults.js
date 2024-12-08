"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDefaults = PostDefaults;
const client_1 = require("@triplit/client");
const ScrapperInfoPart_1 = require("./ScrapperInfoPart");
const ContentModuleSchema_1 = require("../modules/Content/ContentModuleSchema");
function PostDefaults(schema) {
    return client_1.Schema.Schema({
        id: client_1.Schema.Id(),
        scrapper_info: client_1.Schema.Optional(ScrapperInfoPart_1.ScrapperInfoPart),
        container_id: client_1.Schema.String(),
        container: client_1.Schema.RelationById(ContentModuleSchema_1.ContentModuleTables.ContentContainers, "$container_id"),
        ...schema,
    });
}
;
//# sourceMappingURL=PostDefaults.js.map