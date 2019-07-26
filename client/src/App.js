// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import Layout from './hoc/layout';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from './components/Home';
import Product from './components/Product';
import Dashboard from './components/User';
// import Loader from './components/utils/Loader';
import authentication from './hoc/authentication';
import Account from './components/User/Account';
import Settings from './components/User/Admin/Settings';
import admin from './hoc/admin';
import Products from './components/User/Admin/Products';

// const useWindowWidth = () => {
//     const [width, setWidth] = useState(window.innerWidth);
//     useEffect(() => {
//         const handleResize = () => setWidth(window.innerWidth);
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         }
//     })
//     console.log(width);
//     return width;
// }

const App = (props) => {
    // const [loading, setLoading] = useState(true);

    const routes = [
        { path: '/', name: 'Home', exact: true, Component: authentication(Home, null) },
        { path: '/product/:brand/:category/:usable/:name/:id', name: 'Product', exact: true, Component: authentication(Product, null) },
        { 
            path: '/user/dashboard', name: 'Dashboard', exact: false, Component: authentication(Dashboard, true),
            subRoutes: [
                {path: '/user/dashboard/account', exact: true, Component: authentication(Account, true)},
                {path: '/user/dashboard/settings', exact: true, Component: admin(Settings)},
                {path: '/user/dashboard/products', exact: true, Component: admin(Products)},
            ]
        },
    ];

    // if (loading) {
    //     return <Loader setLoading={(val) => setLoading(val)} />
    // }
    // useWindowWidth()

    return (
        <Layout>
            {routes.map(({ path, exact, Component, subRoutes }) => (
                <Route key={path} exact={exact} path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={500}
                            classNames='container'
                            unmountOnExit mountOnEnter
                        >
                            <Component subRoutes={subRoutes} />
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </Layout>
    );
};

export default App;