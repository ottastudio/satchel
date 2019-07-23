import React, {useState} from 'react';
import Layout from './hoc/layout';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from './components/Home';
import Product from './components/Product';
import Dashboard from './components/User';
import Loader from './components/utils/Loader';

const App = (props) => {
    const [loading, setLoading] = useState(false)

    const routes = [
        {path: '/', name: 'Home', exact: true, Component: Home},
        {path: '/product', name: 'Product', exact: false, Component: Product},
        {path: '/user/dashboard', name: 'Dashboard', exact: false, Component: Dashboard},
    ]

    // console.log(props);

    if(loading){
        return <Loader setLoading={(val) => setLoading(val) } />
    }

    return (
        <Layout user={props.user}>
            {routes.map(({path, exact, Component}) => (
                <Route key={path} exact={exact} path={path}>
                    {({match}) => (
                        <CSSTransition
                            in={match != null}
                            timeout={500}
                            classNames='container'
                            unmountOnExit mountOnEnter
                        >
                            <Component/>
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </Layout>
    );
};

export default App;