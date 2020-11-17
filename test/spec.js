"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@appolo/core");
const utils_1 = require("@appolo/utils");
const __1 = require("../");
const TestStore_1 = require("./src/TestStore");
let should = require('chai').should();
describe("context module Spec", function () {
    let app;
    beforeEach(async () => {
        app = core_1.createApp({ root: __dirname, environment: "production", port: 8182 });
        app.module.use(__1.StateModule.for({ redis: process.env.REDIS }));
        await app.launch();
    });
    afterEach(async () => {
        let store = app.injector.get(TestStore_1.TestStore);
        await store.reset({ counter: 0 });
        await app.reset();
    });
    it("Should  set state multi store", async () => {
        let store = app.injector.get(TestStore_1.TestStore);
        store.setCounter(5);
        let { state } = await store.once("counter");
        state.counter.should.be.eq(5);
        await utils_1.Promises.delay(300);
        let store2 = app.injector.get(TestStore_1.TestStore2);
        let state2 = await store2.getState();
        state2.counter.should.be.eq(5);
    });
});
//# sourceMappingURL=spec.js.map