import React from 'react';
import {connect} from 'react-redux';
import {
    toggleMenuUI,
    toggleAccountUI,
    toggleCartUI,
    toggleSearchUI
} from './../store/actions/actions_ui';

const CloseModule = ({dispatch}) => {
    dispatch(toggleMenuUI(false))
    dispatch(toggleAccountUI(false))
    dispatch(toggleCartUI(false))
    dispatch(toggleSearchUI(false))
};

const mapStateToProps = state => {
    return {
        ui: state.ui
    }
}

export default connect(mapStateToProps)(CloseModule);