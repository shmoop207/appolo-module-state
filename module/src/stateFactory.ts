import {define, singleton, factory, IFactory, inject} from "@appolo/inject";
import {Discovery} from "@appolo/engine";
import {Promises} from "@appolo/utils";
import {Store} from "appolo-state-cluster";
import {IOptions, IStateOptions} from "./interfaces";
import {StateProvider} from "./stateProvider";
import {StateSymbol} from "./decorators";


@define()
@singleton()
@factory()
export class StateFactory implements IFactory<void> {
    @inject() moduleOptions: IOptions;
    @inject() discovery: Discovery;
    @inject() stateProvider: StateProvider;

    public async get() {
        let stores = this.discovery.getParent().findAllReflectData<IStateOptions>(StateSymbol)

        await Promises.map(stores, (exports => this.stateProvider.addState(exports.fn,exports.metaData)));
    }
}
