import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import FullPage from './Components/common/FullPage';
import App from './Components/App';

const render = Component => {
    ReactDOM.render(
        <Router>
            <FullPage />
        </Router>,
        document.getElementById('root')
    )
}

render(App);

// if (module.hot) {
//     module.hot.accept('./Components/App', () => { render(App) })
// }