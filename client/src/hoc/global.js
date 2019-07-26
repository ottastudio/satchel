import React from 'react';
import { Route } from 'react-router-dom';

const Container = (props) => {
    return (
        <div className='container'>
            {props.children}
        </div>
    );
};

const SubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.Component {...props} routes={route.subRoutes} />
            )}
        />
    );
};

export { Container, SubRoutes };