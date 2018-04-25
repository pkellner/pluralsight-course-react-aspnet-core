import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {sessionsFetchData} from "../../../redux/actions/sessions";
import {connect} from "react-redux";

class Login extends Component {
    render() {
        return (
            <div>my login pagex</div>
        );
    }
}

Login.propTypes = {};
Login.defaultProps = {};

export default {
    component: connect()(Login)
};

