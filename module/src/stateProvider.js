"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateProvider = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
let StateProvider = class StateProvider {
    constructor() {
        this._stores = new Map();
    }
    async addState(type, params) {
        let options = Object.assign({}, this.moduleOptions, params);
        let store = this.injector.get(type);
        store.setOptions(options);
        if (params.initialState) {
            store.setInitialState(params.initialState);
        }
        this._stores.set(params.name, store);
        await store.initialize();
    }
};
tslib_1.__decorate([
    inject_1.inject()
], StateProvider.prototype, "moduleOptions", void 0);
tslib_1.__decorate([
    inject_1.inject()
], StateProvider.prototype, "injector", void 0);
StateProvider = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], StateProvider);
exports.StateProvider = StateProvider;
//# sourceMappingURL=stateProvider.js.map