"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestStore2 = exports.TestStore = void 0;
const tslib_1 = require("tslib");
const __1 = require("../../");
let TestStore = class TestStore extends __1.Store {
    async setCounter(value) {
        let state = await this.getState();
        await this.setState({ counter: state.counter + 5 });
    }
};
tslib_1.__decorate([
    __1.transaction()
], TestStore.prototype, "setCounter", null);
TestStore = tslib_1.__decorate([
    __1.state("test")
], TestStore);
exports.TestStore = TestStore;
let TestStore2 = class TestStore2 extends __1.Store {
    async setCounter(value) {
        let state = await this.getState();
        await this.setState({ counter: state.counter + 5 });
    }
};
tslib_1.__decorate([
    __1.transaction()
], TestStore2.prototype, "setCounter", null);
TestStore2 = tslib_1.__decorate([
    __1.state("test")
], TestStore2);
exports.TestStore2 = TestStore2;
//# sourceMappingURL=TestStore.js.map