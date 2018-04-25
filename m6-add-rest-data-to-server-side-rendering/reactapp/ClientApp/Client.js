
import ReactDOM from "react-dom";
import React from "react";
import { browserHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import {renderRoutes} from "react-router-config";

import { Provider } from 'react-redux';

import configureStore from "../redux/configureStore";

const store = configureStore(window.__STATE__);

ReactDOM.hydrate(
    <Provider store={store}>
        <Router history={browserHistory}>
            {renderRoutes(Routes)}
        </Router>
    </Provider>,
    document.getElementById("app")
);