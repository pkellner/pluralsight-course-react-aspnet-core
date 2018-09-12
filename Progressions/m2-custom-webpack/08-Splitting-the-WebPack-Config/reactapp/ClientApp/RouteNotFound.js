import React, {Component} from 'react';
import { Route } from 'react-router-dom';

class RouteNotFound extends Component {
    render() {
        return (
            <Route render={() => {
                return (
                    <div>
                        <h1>404 : Not Found!</h1>
                    </div>
                )
            }}/>
        );
    }
}

RouteNotFound.defaultProps = {};

export default RouteNotFound;
