import React from 'react';
import { Route } from 'react-router-dom';

const Container = (props) => {
    const name = props.name ? props.name : null;
    const className = props.className ? (`container ${props.className}`) : 'container';
    const style = props.style ? props.style : null;
    return (
        <div name={name} className={className} style={style}>
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

const DashboardLayout = props => {
    const name = props.name ? props.name : null;
    const className = props.className ? (`dashboard ${props.className}`) : 'dashboard';
    const style = props.style ? props.style : null;
    return (
        <div name={name} className={className} style={style}>
            {props.children}
        </div>
    )
}

export { Container, SubRoutes, DashboardLayout };