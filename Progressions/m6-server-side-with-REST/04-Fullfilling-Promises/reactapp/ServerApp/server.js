import configureStore from "../redux/configureStore";
import renderer from './Renderer';
import {matchRoutes} from "react-router-config";

const express = require('express');
const app = express();

// enable the next two lines allows for urls like /speakers to resolve directly
// const history = require('connect-history-api-fallback');
// app.use(history());

app.use(express.static('public',{
    index: false
}));

import Renderer from './Renderer';
import Routes from "../ClientApp/Routes";
app.get('*', (req, res) => {

    const store = configureStore();

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

app.listen(3040, function () {
    console.log('Listening on port 3040!');
});