import {App, createApp} from '@appolo/core'
import {Promises} from '@appolo/utils'
import * as request from 'supertest';
import {StateModule} from '../'
import {TestStore, TestStore2} from "./src/TestStore";

let should = require('chai').should();


describe("context module Spec", function () {

    let app: App;

    beforeEach(async () => {

        app = createApp({root: __dirname, environment: "production", port: 8182});

        app.module.use(StateModule.for({redis: process.env.REDIS}));

        await app.launch();





    });

    afterEach(async () => {
        let store = app.injector.get<TestStore>(TestStore);
        await store.reset({counter: 0});
        await app.reset();
    });

    it("Should  set state multi store", async () => {

        let store = app.injector.get<TestStore>(TestStore)
         store.setCounter(5);

        let {state} = await store.once("counter");

        state.counter.should.be.eq(5);

        await Promises.delay(300);

        let store2 = app.injector.get<TestStore2>(TestStore2)

        let state2 = await store2.getState();

        state2.counter.should.be.eq(5);

    });


});

