import {Files, Reflector, Classes} from "@appolo/utils";
import {define,singleton} from "@appolo/inject";
import {IStateOptions} from "./interfaces";

export const StateSymbol = "@__StateSymbol__";


export function state(name?: string, params: IStateOptions = {}) {

    return function (type: any) {

        params.name = name || Classes.className(type);
        Reflector.setMetadata(StateSymbol, params, type)
        singleton()(type)
        define()(type)


    }
}
