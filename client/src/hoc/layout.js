import React, { Fragment } from 'react';
import Menu from '../components/Menu';
// eslint-disable-next-line
import Footer from '../components/Footer';
import Module from '../components/Module';

const Layout = (props) => {

    return (
        <Fragment>
            <Menu user={props.user} />
            <Module/>
            {props.children}
            {/* <Footer/> */}
        </Fragment>
    );
};

export default Layout;