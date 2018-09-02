import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState = {}) {

    const composeEnhancers = composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    });

    //const restUrl = 'http://localhost:4000/rest';

    const client = axios.create({ //all axios can be used, shown in axios documentation
        //baseURL: restUrl,
        //responseType: 'json'
    });

    return createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk,axiosMiddleware(axios.create())))
    );
}
