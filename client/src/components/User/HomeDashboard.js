import React from 'react';
import { DashboardLayout } from '../../hoc/global';
import { connect } from 'react-redux';

const HomeDashboard = (props) => {
    console.log(props);
    return (
        <DashboardLayout name='home'>
            <div>{props.user.userData.firstname} {props.user.userData.lastname}</div>
            <div>{props.user.userData.email}</div>
        </DashboardLayout>
    );
};

export default connect()(HomeDashboard);