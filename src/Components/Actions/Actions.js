import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import AddClient from "./AddClient";
import UpdateClient from "./UpdateClient";

const Actions = inject("clientsStore")(
  observer(props => {
    return (
      <div>
        <AddClient />
        <UpdateClient />
      </div>
    );
  })
);

export default Actions;
