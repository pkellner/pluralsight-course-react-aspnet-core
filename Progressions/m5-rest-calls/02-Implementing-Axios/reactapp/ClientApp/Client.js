
import ReactDOM from "react-dom";
import React from "react";
import { browserHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import FullPage from "./Components/common/FullPage"

ReactDOM.render(
    <Router history={browserHistory}>
      <FullPage />
    </Router>,
    document.getElementById("app")
);