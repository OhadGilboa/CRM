import React, { useState } from "react";
import { inject, observer } from "mobx-react";

const Client = inject("clientsStore")(
  observer(props => {
    let clientsStore = props.clientsStore;
    let client = props.client;
    console.log(props);
    let nameArr = client.name.split(" ");
    let name = nameArr[0];
    let surName = nameArr[1];

    return (
      <tr className={client.id}>
        <td className="name">{name} </td>
        <td className="surName">{surName} </td>
        <td className="country">{client.country} </td>
        <td className="firstContact">{client.firstContact} </td>
        <td className="emailType">{client.emailType} </td>
        <td className="sold">{client.sold ? "true" : "false"} </td>
        <td className="owner">{client.owner} </td>
        {/* <td><i className="fas fa-trash" onClick={this.delete}></i></td> */}
      </tr>
    );
  })
);

export default Client;
