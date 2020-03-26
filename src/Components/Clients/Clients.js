import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { transaction } from "mobx";
import Client from "./Client";

const Clients = inject("clientsStore")(
  observer(props => {
    let clientsStore = props.clientsStore;
    return (
      <div>
        <input></input>
        <table align="center" id="transactions">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Country</th>
              <th>First Contact</th>
              <th>Email Type</th>
              <th>Sold</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {clientsStore.clients.map(c => (
              <Client client={c} />
            ))}
          </tbody>
        </table>
      </div>
    );
  })
);

export default Clients;
