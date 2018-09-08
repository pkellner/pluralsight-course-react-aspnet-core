import React, {Component} from 'react';
import { Route } from 'react-router-dom';



class RouteNotFound extends Component {

    componentDidMount() {
        this.props.action(true);
    }

    render() {
        console.log('route not found in RouteNotFound.js.  Bubble up...');
        //this.props.action(false);
        return (
            <Route render={({ staticContext }) => {
                if (staticContext) {
                    staticContext.status = 404;
                }
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

// export default RouteNotFound;

export default {
    component: RouteNotFound
};
