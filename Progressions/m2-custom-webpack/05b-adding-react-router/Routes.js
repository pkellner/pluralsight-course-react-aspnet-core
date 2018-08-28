import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact path="/"
                        render={() =>
                            <h3>Home</h3>} />
                    <Route
                        exact path="/route1"
                        render={() =>
                            <h3>This is Route1</h3>} />
                    <Route
                        exact path="/route2"
                        render={() =>
                            <h1>This is Route2</h1>} />
                    <Route
                        render={() => (
                            <h1>Route Not Found</h1>
                        )} />
                </Switch>
            </Router>
        );
    }
}

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;
