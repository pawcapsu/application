"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModuleSchema = exports.ContentModuleTables = void 0;
const client_1 = require("@triplit/client");
const reusableParts_1 = require("../../reusableParts");
var ContentModuleTables;
(function (ContentModuleTables) {
    ContentModuleTables["ContentContainers"] = "content_containers";
    ContentModuleTables["MediaContent"] = "media_content";
    ContentModuleTables["StoryContent"] = "story_content";
})(ContentModuleTables || (exports.ContentModuleTables = ContentModuleTables = {}));
;
exports.ContentModuleSchema = {
    [ContentModuleTables.ContentContainers]: {
        schema: client_1.Schema.Schema({
            id: client_1.Schema.Id(),
            content_type: client_1.Schema.String({ enum: ['media', 'story'] }),
            content_id: client_1.Schema.String(),
            tags: client_1.Schema.Set(client_1.Schema.String()),
            meta: client_1.Schema.Record({
                title: client_1.Schema.Optional(client_1.Schema.String()),
                description: client_1.Schema.Optional(client_1.Schema.String({ default: "No description provided" })),
                isNSFW: client_1.Schema.Boolean({ default: false }),
            }),
            creator_id: client_1.Schema.String(),
            created_by: client_1.Schema.RelationOne("users", {
                where: [["id", "=", "$creator_id"]],
            })
        })
    },
    [ContentModuleTables.MediaContent]: {
        schema: (0, reusableParts_1.PostDefaults)({
            image_url: client_1.Schema.Record({
                original_resolution: client_1.Schema.String(),
                high_resolution: client_1.Schema.Optional(client_1.Schema.String()),
                balanced_resolution: client_1.Schema.Optional(client_1.Schema.String()),
                low_resolution: client_1.Schema.Optional(client_1.Schema.String())
            }),
        }),
    },
    [ContentModuleTables.StoryContent]: {
        schema: (0, reusableParts_1.PostDefaults)({}),
    },
};
//# sourceMappingURL=ContentModuleSchema.js.map