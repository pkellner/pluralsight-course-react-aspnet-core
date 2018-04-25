import React from 'react';
import { Switch, Route } from 'react-router'
//import {Route} from 'react-router-dom';
import Home from './Components/home/Home';
import Speakers from './Components/speakers/Speakers';
import Login from './Components/common/Login';
import SpeakerDetail from './Components/speakers/SpeakerDetail'

// tom-becker-8575

export default () => {
    return (
        <div>
            <Switch>
                <Route path="/speakers/:name" component={SpeakerDetail} />
                <Route exact path="/speakers" component={Speakers}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </div>
    )
};