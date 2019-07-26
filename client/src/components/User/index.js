import React, { useEffect, useState, Fragment, useRef } from 'react';
import { Container, SubRoutes } from '../../hoc/global';
// eslint-disable-next-line
import { Transition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import {
    turnAllFalse,
    toggleDashboardMenu,
    toggleDashboardMenuFalse
} from '../../store/actions/actions_ui';
import useOnClickOutside from '../utils/hooks';

const menuStyle = {
    position: 'fixed',
    top: 40,
    left: 40,
    width: 40,
    height: 40,
    border: '1px solid',
    zIndex: 1001,
    overflow: 'hidden',
    transition: '500ms cubic-bezier(1,0,0,1)'
}

const linkStyle = {
    display: 'block',
    alignItems: 'center'
}

const transMenuStyle = {
    entering: { height: 40, width: 400 },
    entered: { height: 500, width: 400 },
    exiting: { height: 40, width: 400 },
    exited: { height: 40, width: 40 },
}

const Dashboard = (props) => {
    const [state, setState] = useState({ menu: false, content: false })
    const ref = useRef();
    useOnClickOutside(ref, () => props.dispatch(toggleDashboardMenuFalse()));
    useEffect(() => {
        const module = document.querySelector('.module-wrapper');
        const homeLink = document.querySelector('.home-link');
        module.setAttribute('style', 'left: 50%; transform: translateX(-50%)');
        homeLink.setAttribute('style', 'top: calc(100vh - 80px)');
        props.dispatch(turnAllFalse())
        setTimeout(() => {
            setState({ menu: true, content: true })
        }, 500);
        setTimeout(() => {
            props.dispatch(toggleDashboardMenu())
        }, 750);

        return () => {
            module.removeAttribute('style', 'left: 50%; transform: translateX(-50%)');
            homeLink.removeAttribute('style', 'top: calc(100vh - 80px)');
            setState({ menu: false, content: false })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const links = {
        regular: [
            { link: '/user/dashboard', title: 'overview' },
            { link: '/user/dashboard/account', title: 'account' },
        ],
        admin: [
            { link: '/user/dashboard/lookbook', title: 'lookbook' },
            { link: '/user/dashboard/products', title: 'products' },
            { link: '/user/dashboard/sales', title: 'sales' },
            { link: '/user/dashboard/settings', title: 'settings' },
            { link: '/user/dashboard/users', title: 'users' },
        ]
    }

    return (
        <Container>
            {state.menu ?
                <Transition in={props.ui.dashboardMenu} timeout={500}>
                    {status => (
                        <div ref={ref} style={{ ...menuStyle, ...transMenuStyle[status] }}>
                            <NavLink
                                style={{
                                    height: 40,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%'
                                }}
                                to='/user/dashboard'
                                onClick={() => props.dispatch(toggleDashboardMenu())}
                            >
                                A
                            </NavLink>
                            {
                                links.regular.map(({ link, title }) => (
                                    <NavLink style={linkStyle} activeClassName='menu-active' exact key={title} to={link}>
                                        {title}
                                    </NavLink>
                                ))
                            }
                            {
                                props.user.userData.isAdmin ?
                                    <Fragment>
                                        <br />
                                        <br />
                                        {links.admin.map(({ link, title }) => (
                                            <NavLink style={linkStyle} activeClassName='menu-active' key={title} to={link}>{title}</NavLink>
                                        ))}
                                    </Fragment>
                                    : null
                            }
                            <div>Logout</div>
                        </div>
                    )}
                </Transition>
                : null
            }

            {
                props.location.pathname === '/user/dashboard' ?
                    'Dashboard'
                :
                props.subRoutes.map((route, i) => (
                    <SubRoutes key={i} {...route} />
                ))
            }

        </Container>
    );
};

const mapStateToProps = state => {
    return {
        ui: state.ui
    }
}

export default connect(mapStateToProps)(Dashboard);