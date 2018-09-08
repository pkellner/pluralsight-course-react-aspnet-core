import Home from "./Components/home/Home";
import Login from "./Components/common/Login";
import Speakers from "./Components/speakers/Speakers";
import RouteNotFound from "./RouteNotFound";

import App from "./Components/common/App";

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...Login,
                path: '/login',
                exact: true
            },
            {
                ...Speakers,
                path: '/speakers',
                exact: true
            },
            {
                ...RouteNotFound
            }
        ]
    }
];