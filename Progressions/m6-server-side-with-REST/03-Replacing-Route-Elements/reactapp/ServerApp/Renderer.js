import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter as Router} from 'react-router-dom';
import {renderRoutes} from "react-router-config";
import Routes from '../ClientApp/Routes';
import Provider from "react-redux/es/components/Provider";
//import FullPage from '../ClientApp/Components/common/FullPage';

export default (req,store) => {
    let context = {};
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
            <div id="app">${content}</div>
            <script src="clientbundle.js"></script>
          </body>
          
        </html>
      `,
        routestatus: context.status
    }
};