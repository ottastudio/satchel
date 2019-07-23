import React, { useState, Fragment } from 'react';
import authentication from '../../hoc/authentication';

import { Transition } from 'react-transition-group';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';

const defStyle = { opacity: 0, transition: '500ms cubic-bezier(1,0,0,1)' }
const transStyle = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}

const Account = (props) => {
    const [state, setState] = useState({ login: true, register: false })
    const user = props.user.userData;

    const toggle = () => {
        state.login ? setState({ login: false, register: true }) : setState({ login: true, register: false })
    }

    console.log(props)

    if (user.isAuth) {
        return (
            <div style={{padding: 15}}>
                <div>Hello, {props.user.userData.firstname}.</div>
                <div>
                    <Link to='user/dashboard'>Profile</Link>
                </div>
            </div>
        )
    }
    return (
        <Fragment>
            <Transition
                in={state.login}
                timeout={500}
                unmountOnExit
            >
                {state => (
                    <Login onClick={toggle} {...props} style={{ ...defStyle, ...transStyle[state] }} />
                )}
            </Transition>
            <Transition
                in={state.register}
                timeout={500}
                unmountOnExit
            >
                {state => (
                    <Register onClick={toggle} style={{ ...defStyle, ...transStyle[state] }}/>
                )}
            </Transition>

            <div className='switcher'>
                {/* {state.login ? 'register':'login'} */}
                <div className={state.login ? 'active':''} onClick={() => setState({login: true})}>Login</div>
                <div className={state.register ? 'active':''} onClick={() => setState({register: true})}>Register</div>
            </div>
        </Fragment>
    );
};

export default authentication(Account);