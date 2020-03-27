import { observable, action } from "mobx";
import axios from "axios";

export default class ClientsStore {
  @observable clients = [];

  @action getClients = async () => {
    let result = await axios.get("http://localhost:3001/Clients");
    console.log(result.data[0])
    this.clients = result.data[0];
  };

  //   @action inputHandler = (e) => {}

  //   @action sortHandler = () => {}
}
