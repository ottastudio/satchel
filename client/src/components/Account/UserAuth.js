import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { logoutUser } from '../../store/actions/actions_user';

const UserAuth = (props) => {
    const logoutHandler = () => {
        props.dispatch(logoutUser()).then(res => {
            if (res.payload.success) {
                setTimeout(() => {
                    props.close()
                }, 200);
                setTimeout(() => {
                    props.history.push('/')
                }, 700);
            }
        })
    }

    return (
        <div style={{ padding: 15 }}>
            <div>Hello, {props.user.userData.firstname}.</div>
            <div>
                <Link to='/user/dashboard'>Profile</Link>
            </div>
            <div onClick={() => logoutHandler()}>Logout</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(UserAuth));