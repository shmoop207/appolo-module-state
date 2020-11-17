import {define, singleton, factory, IFactory, inject, Injector} from "@appolo/inject";
import {Discovery} from "@appolo/engine";
import {Classes, Objects} from "@appolo/utils";
import {IOptions, IStateOptions} from "./interfaces";
import {Store} from "appolo-state-cluster";

@define()
@singleton()
export class StateProvider {

    private _stores = new Map<string, Store<any>>();
    @inject() private moduleOptions: IOptions;
    @inject() private injector: Injector;

    public async addState(type: Function, params: IStateOptions) {

        let options = Object.assign({}, this.moduleOptions, params)

        let store = this.injector.get<Store<any>>(type);

        store.setOptions(options as any);

        if (params.initialState) {
            store.setInitialState(params.initialState);
        }

        this._stores.set(params.name, store);

        await store.initialize();
    }
}
