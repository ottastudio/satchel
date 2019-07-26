import React, { useRef } from 'react';
import './module.scss';
import { ModuleContainer } from './components';
import useOnClickOutside from '../utils/hooks';

import {
    toggleMenuUI,
    toggleAccountUI,
    toggleCartUI,
    toggleSearchUI,
    turnAllFalse
} from '../../store/actions/actions_ui';
import { connect } from 'react-redux';

const Module = (props) => {
    const ref = useRef();
    useOnClickOutside(ref, () => props.dispatch(turnAllFalse()));

    return (
        <div className='module-wrapper' ref={ref}>
            <ModuleContainer
                state={props.ui.menu}
                type='menu'
                onClick={() => props.dispatch(toggleMenuUI())}
            />
            <ModuleContainer
                state={props.ui.account}
                type='account'
                onClick={() => props.dispatch(toggleAccountUI())}
            />
            <ModuleContainer
                state={props.ui.cart}
                type='cart'
                onClick={() => props.dispatch(toggleCartUI())}
            />
            <ModuleContainer
                state={props.ui.search}
                type='search'
                onClick={() => props.dispatch(toggleSearchUI())}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ui: state.ui
    }
}

export default connect(mapStateToProps)(Module);