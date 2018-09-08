//import 'babel-polyfill';

import express from 'express';
import renderer from './Renderer';
import configureStore from '../redux/configureStore';
import Routes from "../ClientApp/Routes";
import {renderRoutes,matchRoutes} from "react-router-config";

require('dotenv').config();

console.log('ENV:');
console.log(' NODE_ENV:' + process.env.NODE_ENV);

const restUrl = process.env.NODE_ENV === 'production' ?
    process.env.PROD_RESTURL :
    process.env.JSONSERVER_RESTURL;

const app = express();

app.use(express.static('public', {
    index: false
}));

app.get('*', (req, res) => {

    const store = configureStore();


    // see matchRoutes docs... https://www.npmjs.com/package/react-router-config
    const myRoutes = matchRoutes(Routes, req.path);

    const promises = myRoutes.map(({route, match}) => {
        return route.loadData
            ? route.loadData(store)
            : Promise.resolve(null)
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        if (content.routestatus == 404) {
            res.status(404).end("Not found, 404 status returned (Server Side Generated)");
        } else {
            res.send(content.htmlcode);
        }
    });

});

const PORT = process.env.PORT || 3040;

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT);
});