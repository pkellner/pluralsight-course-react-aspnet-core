
const express = require('express');
const app = express();

app.use(express.static('public',{
    index: false
}));

import Renderer from './Renderer';
app.get('*', (req, res) => {
    const rendererInstance = Renderer(req);

    if (rendererInstance.routestatus == 404){
        res.status(404).end("Not found, 404 status returned");
    } else {
        res.send(Renderer(req).htmlcode);
    }
});

app.listen(3040, function () {
    console.log('Listening on port 3040!');
});