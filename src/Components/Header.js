import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

const Header = inject("clientsStore")(
  observer(props => {
    return (
      <div className="mainLinks">
        <Link className="link" to="/">
          Home
        </Link>
        <div></div>
        <Link className="link" to="/Clients">
          Clients
        </Link>
        <div></div>
        <Link className="link" to="/Actions">
          Actions
        </Link>
        <div></div>
        <Link className="link" to="/Analytics">
          Analytics
        </Link>
      </div>
    );
  })
);

export default Header;
