import React, {Component} from 'react';
import { renderRoutes } from 'react-router-config';
import App from './App';

class FullPage extends Component {

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler(val) {
        this.props.action();
    }

    render() {
        return (
            <div>
                <App/>
            </div>
        );
    }
}

FullPage.defaultProps = {};

export default FullPage;
