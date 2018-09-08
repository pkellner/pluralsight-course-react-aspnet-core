import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import {StaticRouter as Router} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../ClientApp/Routes';


export default (req, store, context) => {

    const content = renderToString(
        <Provider store={store}>
            <Router location={req.path} context={context}>
                {renderRoutes(Routes)}
            </Router>
        </Provider>
    );

    return {
        htmlcode: `<html>
          <head>
            <title>SVCC React Application</title>
            <link rel="stylesheet" href="App.css">            
          </head>
          
          <body>
            <div>
                <div id="app">${content}</div>
                </div>
            <script>window.__STATE__=${serialize(store.getState())}</script>
            <script src="clientbundle.js"></script>
          </body>
          
        </html>
      `,
        routestatus: context.status
    }
};