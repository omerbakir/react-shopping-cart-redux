import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {createStore} from "redux";
import {reducer} from "./reducers/index.js";
import {Provider} from "react-redux";


const rootElement = document.getElementById("root");
const store=createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <Router>
    <App />
      </Router>
      </Provider>
  </React.StrictMode>,
 rootElement
);


