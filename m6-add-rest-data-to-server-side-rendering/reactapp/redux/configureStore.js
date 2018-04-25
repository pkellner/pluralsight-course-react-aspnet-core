import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(initialState = {}) {

    if (process.env.NODE_ENV !== "production") {
        require('dotenv').config();
    }
    const production = process.env.NODE_ENV &&
        process.env.NODE_ENV === "production";
    const restUrl = process.env.NODE_ENV === 'production' ?
        process.env.PROD_RESTURL :
        process.env.JSONSERVER_RESTURL;
    console.log(`production: ${production}  restUrl: ${restUrl}`);

    let middleware = [
        thunk,
        axiosMiddleware(axios.create({baseURL:restUrl}))
    ];

    if (!production) {
        middleware.push(require('redux-immutable-state-invariant').default());
        console.log('added redux-immutable-state-invariant');
    }

    // always push redux middle to production per medium articles regarding security
    const composeEnhancers = composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    });

    return createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware))
    );
}












//https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
// npm install if-env --save

// require('dotenv').config();
//
// const restUrl = process.env.NODE_ENV === 'production' ?
//     process.env.PROD_RESTURL :
//     process.env.JSONSERVER_RESTURL;
//
//
// const composeEnhancers = composeWithDevTools({
//     // options like actionSanitizer, stateSanitizer
// });
//
// const client = axios.create({ //all axios can be used, shown in axios documentation
//     //baseURL:'http://localhost:50493/rest', // make sure to allow in startup.cs CORS entry
//     baseURL:'http://localhost:4000/rest',
//     responseType: 'json'
// });

// https://www.npmjs.com/package/redux-immutable-state-invariant

// //axiosMiddleware(axios.create({baseURL:restUrl}),axiosMiddlewareConfig)
//
// const axiosMiddlewareConfig = {
//     interceptors: {
//         request: [{
//             success: function ({getState, dispatch, getSourceAction}, req) {
//                 console.log(req); //contains information about request object
//
//                 return req;
//             },
//             error: function ({getState, dispatch, getSourceAction}, error) {
//
//                 return response
//             }
//         }
//         ],
//         response: [{
//             success: function ({getState, dispatch, getSourceAction}, res) {
//                 console.log(res); //contains information about request object
//
//                 return res;
//             },
//             error: function ({getState, dispatch, getSourceAction}, error) {
//
//                 return Promise.reject(error);
//             }
//         }
//         ]
//     }
// };
//
