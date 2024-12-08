"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapperInfoPart = void 0;
const client_1 = require("@triplit/client");
exports.ScrapperInfoPart = client_1.Schema.Record({
    scrappedOn: client_1.Schema.Date(),
    source: client_1.Schema.String(),
});
//# sourceMappingURL=ScrapperInfoPart.js.map