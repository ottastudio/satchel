import React from 'react';
// import Loader from './components/utils/Loader';
import Layout from './hoc/layout';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

// COMPONENTS
import Home from './components/Home';

// PRODUCT PAGES
import Product from './components/Product';
import ProductDetail from './components/Product/Detail';

// AUTH PAGES
import authentication from './hoc/authentication';
import Dashboard from './components/User';
import Account from './components/User/Account';

// ADMIN PAGES
import admin from './hoc/admin';
import Products from './components/User/Admin/Products';
import Settings from './components/User/Admin/Settings';

// import { useMedia } from './components/utils/hooks';

const App = () => {
    // const [loading, setLoading] = useState(true);
    // const wrapperClass = useMedia(['(max-width: 767px)', '(min-width: 768px)'], ['app-footer-mobile', 'app-footer'], 'app-footer');

    const routes = [
        { path: '/', name: 'Home', exact: true, Component: authentication(Home, null) },
        { path: '/product', name: 'Product', exact: true, Component: authentication(Product, null) },
        { path: '/product/:brand/:category/:usable/:name/:id', name: 'Product Detail', exact: true, Component: authentication(ProductDetail, null) },
        {
            path: '/user/dashboard', name: 'Dashboard', exact: false, Component: authentication(Dashboard, true),
            subRoutes: [
                { path: '/user/dashboard/account', exact: true, Component: authentication(Account, true) },
                { path: '/user/dashboard/settings', exact: true, Component: admin(Settings) },
                { path: '/user/dashboard/products', exact: true, Component: admin(Products) },
            ]
        },
    ];

    // if (loading) {
    //     return <Loader setLoading={(val) => setLoading(val)} />
    // }

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