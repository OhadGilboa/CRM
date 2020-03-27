import React, { useState } from "react";
import { inject, observer } from "mobx-react";

const AddClient = inject("clientsStore")(
  observer(props => {
    return <div></div>;
  })
);

export default AddClient;
