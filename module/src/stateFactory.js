"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateFactory = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const utils_1 = require("@appolo/utils");
const decorators_1 = require("./decorators");
let StateFactory = class StateFactory {
    async get() {
        let stores = this.discovery.getParent().findAllReflectData(decorators_1.StateSymbol);
        await utils_1.Promises.map(stores, (exports => this.stateProvider.addState(exports.fn, exports.metaData)));
    }
};
tslib_1.__decorate([
    inject_1.inject()
], StateFactory.prototype, "moduleOptions", void 0);
tslib_1.__decorate([
    inject_1.inject()
], StateFactory.prototype, "discovery", void 0);
tslib_1.__decorate([
    inject_1.inject()
], StateFactory.prototype, "stateProvider", void 0);
StateFactory = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton(),
    inject_1.factory()
], StateFactory);
exports.StateFactory = StateFactory;
//# sourceMappingURL=stateFactory.js.map