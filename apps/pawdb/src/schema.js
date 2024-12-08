"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.roles = void 0;
const modules_1 = require("./schema/modules");
exports.roles = {
    admin: {
        match: {
            role: "admin",
        },
    },
    user: {
        match: {
            role: "user",
            userId: "$userId",
        },
    },
};
exports.schema = {
    ...modules_1.ContentModuleSchema,
    ...modules_1.UsersModuleSchema,
};
//# sourceMappingURL=schema.js.map