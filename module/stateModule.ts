import {Module, module, IModuleParams} from "@appolo/engine";
import {StateProvider} from "./src/stateProvider";
import {IOptions} from "./src/interfaces";


@module()
export class StateModule extends Module<IOptions> {

    protected readonly Defaults: Partial<IOptions> = {
        id: "stateProvider",
        maxStates: 1,
        cache: true,
        cacheTime: 60 * 1000
    };


    public static for(options: IOptions): IModuleParams {
        return {type: StateModule, options};
    }

    public get exports() {
        return [{id: this._moduleOptions.id, type: StateProvider}]

    }

}
