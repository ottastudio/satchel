import React, { Fragment, useEffect } from 'react';
import Menu from '../components/Menu';
// eslint-disable-next-line
import Footer from '../components/Footer';
import Module from '../components/Module';
// import useOnClickOutside from '../components/Module/hooks';

const Layout = (props) => {
    return (
        <Fragment>
            <Menu />
            <Module />
            {props.children}
        </Fragment>
    );
};

export default Layout;