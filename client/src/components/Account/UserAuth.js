import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { logoutUser } from '../../store/actions/actions_user';

import { turnAllFalse } from '../../store/actions/actions_ui';
import { regularLink, adminLink } from '../utils/links';

const UserAuth = (props) => {
    const logoutHandler = () => {
        props.dispatch(logoutUser()).then(res => {
            if (res.payload.success) {
                setTimeout(() => {
                    props.dispatch(turnAllFalse())
                }, 200);
                setTimeout(() => {
                    props.history.push('/')
                }, 700);
            }
        })
    }

    return (
        <div className='account-admin'>
            <div className='account-admin-header'>
                Hello, {props.user.userData.firstname}.
                <br/>
                <br/>
                <p>
                    Here you can keep track of your recent activity, request returns and exchanges as well as view and edit your account.
                </p>
            </div>
            <div className='account-admin-link'>
                {
                    regularLink.map(({ link, title, exact }) => (
                        <NavLink
                            key={title}
                            to={link}
                            exact={exact}
                            activeClassName='account-admin-link__active'
                            className='account-admin-link__link'
                        >
                            {title}
                        </NavLink>
                    ))
                }
            </div>
            <div className='account-admin-link'>
                {
                    props.user.userData.isAdmin ?
                        adminLink.map(({ link, title, exact }) => (
                            <NavLink
                                key={title}
                                to={link}
                                exact={exact}
                                activeClassName='account-admin-link__active'
                                className='account-admin-link__link'
                            >
                                {title}
                            </NavLink>
                        ))
                        : null
                }
            </div>
            <div 
                className='account-admin-link__logout' 
                onClick={() => logoutHandler()}
                >Logout</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        ui: state.ui
    }
}

export default connect(mapStateToProps)(withRouter(UserAuth));