"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
exports.severity = winston_1.format((info, opt) => {
    info.severity = info.level;
    if (!opt.use_level)
        delete info.level;
    return info;
});
