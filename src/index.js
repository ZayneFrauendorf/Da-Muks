import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./LandingPage";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Store from "./components/Store";
import Checkout from "./components/Checkout";
import Confirm from "./components/Confirm";
import About from "./components/About";
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/confirm" component={Confirm} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
