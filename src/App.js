import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Clients from "./Components/Clients/Clients";
import Actions from "./Components/Actions/Actions";
import Analytics from "./Components/Analytics/Analytics";
import Header from "./Components/Header";
import Homepage from "./Components/HomePage";

const App = inject("clientsStore")(
  observer(props => {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" render={() => <Homepage />} />
          <Route exact path="/Clients" render={() => <Clients />} />
          <Route exact path="/Actions" render={() => <Actions />} />
          <Route exact path="/Analytics" render={() => <Analytics />} />
        </Router>
      </div>
    );
  })
);

export default App;
