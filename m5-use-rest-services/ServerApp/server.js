import configureStore from '../redux/configureStore';

require('dotenv').load();
const port = process.env.PORT || 3040;

const express = require('express');
const app = express();

app.use(express.static('public',{
    index: false
}));

import Renderer from './Renderer';
app.get('*', (req, res) => {

    const store = configureStore();

    const rendererInstance = Renderer(req,store);
    if (rendererInstance.routestatus == 404){
        res.status(404).end("Not found, 404 status returned");
    } else {
        res.send(Renderer(req,store).htmlcode);
    }
});

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});