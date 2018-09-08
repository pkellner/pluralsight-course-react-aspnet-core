import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { composeWithDevTools } from 'redux-devtools-extension';



const production = process.env.NODE_ENV &&
    process.env.NODE_ENV === "production";

if (!production) {
    require('dotenv').config();
}

const restUrl = production ?
    process.env.PROD_RESTURL :
    process.env.JSONSERVER_RESTURL;

let middleware = [
    thunk,
    axiosMiddleware(axios.create({baseURL:restUrl}))
];

if (!production) {
    middleware.push(require('redux-immutable-state-invariant').default());
    console.log('added redux-immutable-state-invariant');
}

export default function configureStore(initialState = {}) {

    const composeEnhancers = composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    });

    //const restUrl = 'http://localhost:4000/rest';
    //console.log('configureStore: ' + restUrl);
    const client = axios.create({ //all axios can be used, shown in axios documentation
        baseURL: restUrl,
        //responseType: 'json'
    });

    return createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware))
    );
}
