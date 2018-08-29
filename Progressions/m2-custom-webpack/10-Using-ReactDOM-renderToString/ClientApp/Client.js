import React from "react"
import ReactDOM from "react-dom"
import FullPage from "./common/FullPage";

import { browserHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.hydrate(
    <Router history={browserHistory}>
        <FullPage/>
    </Router>,
    document.getElementById("app")
);