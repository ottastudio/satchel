import React, {useEffect} from 'react';
import { DashboardLayout } from '../../hoc/global';
import {connect} from 'react-redux';
import {toggleAccountUI} from '../../store/actions/actions_ui';

const HomeDashboard = (props) => {
    console.log(props);
    // useEffect(() => {
    //     props.dispatch(toggleAccountUI())
    // }, [])
    return (
        <DashboardLayout name='home'>
            <div>{props.user.userData.firstname} {props.user.userData.lastname}</div>
            <div>{props.user.userData.email}</div>
        </DashboardLayout>
    );
};

export default connect()(HomeDashboard);