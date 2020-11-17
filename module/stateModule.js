"use strict";
var StateModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateModule = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const stateProvider_1 = require("./src/stateProvider");
let StateModule = StateModule_1 = class StateModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = {
            id: "stateProvider",
            maxStates: 1,
            cache: true,
            cacheTime: 60 * 1000
        };
    }
    static for(options) {
        return { type: StateModule_1, options };
    }
    get exports() {
        return [{ id: this._moduleOptions.id, type: stateProvider_1.StateProvider }];
    }
};
StateModule = StateModule_1 = tslib_1.__decorate([
    engine_1.module()
], StateModule);
exports.StateModule = StateModule;
//# sourceMappingURL=stateModule.js.map