import React from 'react';

import { renderRoutes } from 'react-router-config';
import CodeCampMenu from './CodeCampMenu';
import PageTop from './PageTop';
import Footer from './Footer';

const App = ({ route }) => {
    return (
        <div>
            <PageTop>
                <CodeCampMenu/>
            </PageTop>
            {renderRoutes(route.routes)}
            <Footer />
        </div>
    );
};

export default {
    component: App
};
