"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = exports.StateSymbol = void 0;
const utils_1 = require("@appolo/utils");
const inject_1 = require("@appolo/inject");
exports.StateSymbol = "@__StateSymbol__";
function state(name, params = {}) {
    return function (type) {
        params.name = name || utils_1.Classes.className(type);
        utils_1.Reflector.setMetadata(exports.StateSymbol, params, type);
        inject_1.singleton()(type);
        inject_1.define()(type);
    };
}
exports.state = state;
//# sourceMappingURL=decorators.js.map