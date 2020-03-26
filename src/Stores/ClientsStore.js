import { observable, action } from "mobx";

export default class ClientsStore {
    @observable clients = []
    constructor (data) {
        this.clients = data
    }

//   @action getClients = () => {}

//   @action inputHandler = (e) => {}

//   @action sortHandler = () => {}
}
