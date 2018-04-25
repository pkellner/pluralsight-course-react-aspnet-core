import React, {Component} from 'react';

class RouteNotFound extends Component {
    render() {
        const {component: Component, staticContext} = this.props;
        if (staticContext) {
            staticContext.status = 404;
        }
        return <h1>Page Not Found ... Status 404 (Client Side Generated)</h1>;
    }
}

export default {
    component: RouteNotFound
};
