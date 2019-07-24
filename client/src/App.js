import React, { useState, useEffect } from 'react';
import Layout from './hoc/layout';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from './components/Home';
import Product from './components/Product';
import Dashboard from './components/User';
import Loader from './components/utils/Loader';
import authentication from './hoc/authentication';

const App = (props) => {
    // const [loading, setLoading] = useState(true);

    const routes = [
        { path: '/', name: 'Home', exact: true, Component: authentication(Home, null) },
        { path: '/product/:brand/:category/:usable/:name/:id', name: 'Product', exact: false, Component: authentication(Product, null) },
        { path: '/user/dashboard', name: 'Dashboard', exact: false, Component: authentication(Dashboard, true) },
    ];

    // if (loading) {
    //     return <Loader setLoading={(val) => setLoading(val)} />
    // }

    return (
        <Layout>
            {routes.map(({ path, exact, Component }) => (
                <Route key={path} exact={exact} path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={500}
                            classNames='container'
                            unmountOnExit mountOnEnter
                        >
                            <Component />
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </Layout>
    );
};

export default App;