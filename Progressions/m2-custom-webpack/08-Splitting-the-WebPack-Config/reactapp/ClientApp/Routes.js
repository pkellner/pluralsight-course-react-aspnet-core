import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';
import Home from "./Components/home/Home";
import Speakers from "./Components/speakers/Speakers";
import Login from "./Components/common/Login";
import RouteNotFound from "./RouteNotFound";



class Routes extends Component {
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.props.action();
    }



    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/speakers" component={Speakers}/>
                    <Route exact path="/login" component={Login}/>
                    <Route render={() => <RouteNotFound />}></Route>
                </Switch>
            </div>
        );
    }
}

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;

