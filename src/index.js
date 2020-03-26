import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import ClientsStore from './Stores/ClientsStore'
let data = require(`../src/data.json`)

let clientsStore = new ClientsStore(data)

let store = {clientsStore}


ReactDOM.render(
<Provider {...store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
