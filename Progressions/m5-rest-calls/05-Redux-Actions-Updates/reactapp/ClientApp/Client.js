
import ReactDOM from "react-dom";
import React from "react";
import { browserHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import FullPage from "./Components/common/FullPage";
import configureStore from "../redux/configureStore";

const store = configureStore(window.__STATE__);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <FullPage />
        </Router>
    </Provider>,
    document.getElementById("app")
);

// ReactDOM.render(
//     <Router history={browserHistory}>
//       <FullPage />
//     </Router>,
//     document.getElementById("app")
// );