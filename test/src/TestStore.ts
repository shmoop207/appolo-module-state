import {state,Store,transaction} from "../../";

@state("test")
export class TestStore extends Store<{ counter:number }> {


    @transaction()
    async setCounter(value:number) {
        let state = await this.getState();
        await this.setState({counter: state.counter + 5});
    }
}

@state("test")
export class TestStore2 extends Store<{ counter:number }> {


    @transaction()
    async setCounter(value:number) {
        let state = await this.getState();
        await this.setState({counter: state.counter + 5});
    }
}



