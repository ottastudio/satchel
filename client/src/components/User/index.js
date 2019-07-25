import React, { useEffect, useState, Fragment } from 'react';
import { Container } from '../../hoc/global';
import { Transition } from 'react-transition-group';
import { NavLink, Switch, Route } from 'react-router-dom';

const menuStyle = {
    position: 'fixed',
    top: 40,
    left: 40,
    width: 400,
    height: 500,
    border: '1px solid',
    padding: 15,
    transition: '500ms cubic-bezier(1,0,0,1)'
}

const linkStyle = {
    display: 'block',
    alignItems: 'center'
}

const transMenuStyle = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}

const Dashboard = (props) => {
    const [state, setState] = useState({ menu: false })
    // console.log(props)
    useEffect(() => {
        const module = document.querySelector('.module-wrapper');
        module.setAttribute('style', 'left: 50%; transform: translateX(-50%)')
        setState({ menu: true })

        return () => {
            module.removeAttribute('style', 'left: 50%; transform: translateX(-50%)')
        }
    }, [])

    const links = {
        regular: [
            { link: '/user/dashboard', title: 'overview' },
            { link: '/user/dashboard/profile', title: 'profile' },
        ],
        admin: [
            { link: '/user/dashboard/lookbook', title: 'lookbook' },
            { link: '/user/dashboard/products', title: 'products' },
            { link: '/user/dashboard/sales', title: 'sales' },
            { link: '/user/dashboard/setting', title: 'setting' },
            { link: '/user/dashboard/users', title: 'users' },
        ]
    }

    return (
        <Container>
            <Transition
                in={state.menu}
                timeout={500}
            >
                {status => (
                    <div style={{ ...menuStyle, ...transMenuStyle[status] }}>
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

            <Switch>
                <Route path='/user/dashboard' exact render={() => <div>Dashboard</div>} />
                <Route path='/user/dashboard/profile' exact render={() => <div>Profile</div>} />
                <Route path='/user/dashboard/setting' exact render={() => <div>Setting</div>} />
            </Switch>
        </Container>
    );
};

export default Dashboard;