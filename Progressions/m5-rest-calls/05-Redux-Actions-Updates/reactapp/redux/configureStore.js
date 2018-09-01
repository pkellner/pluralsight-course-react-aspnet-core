import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

export default function configureStore(initialState = {}) {

    //const restUrl = 'http://localhost:4000/rest';

    const client = axios.create({ //all axios can be used, shown in axios documentation
        //baseURL: restUrl,
        //responseType: 'json'
    });

    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunk, axiosMiddleware(client))
    );
}
