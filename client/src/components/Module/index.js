import React, { useRef, useState } from 'react';
import './module.scss';
import { ModuleContainer } from './components';
import useOnClickOutside from './hooks';

const Module = () => {
    const ref = useRef();
    const [state, setState] = useState({ account: false, cart: false });

    useOnClickOutside(ref, () => setState({ account: false, cart: false }));

    const toggleAccount = () => {
        state.account ? setState({ account: false, cart: false }) : setState({ account: true, cart: false })
    }
    const toggleCart = () => {
        state.cart ? setState({ account: false, cart: false }) : setState({ account: false, cart: true })
    }
    return (
        <div className='module-wrapper' ref={ref}>
            <ModuleContainer
                state={state.account}
                type='account'
                onClick={toggleAccount}
                close={() => setState({ account: false })}
            />
            <ModuleContainer
                state={state.cart}
                type='cart'
                onClick={toggleCart}
            />
        </div>
    );
};

export default Module;