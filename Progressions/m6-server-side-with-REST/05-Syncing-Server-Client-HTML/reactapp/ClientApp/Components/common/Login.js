import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {sessionsFetchData} from "../../../redux/actions/sessions";
import {connect} from "react-redux";

class Login extends Component {
    render() {
        return (
            <div>My Login Page</div>
        );
    }
}

function loadData() {
    return promise.resolve();
}

Login.propTypes = {};
Login.defaultProps = {};

export default {
    component: connect()(Login),
    loadData
};





// import React from 'react';
//
// export default function Login() {
//   return (
//       <div>
//          <h2>LOGIN PAGE</h2>
//       </div>
//   );
// }
