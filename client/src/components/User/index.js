import React, { useEffect } from 'react';
import './user.scss';
import { Container, SubRoutes } from '../../hoc/global';
import HomeDashboard from './HomeDashboard';

import { connect } from 'react-redux';
// import { toggleAccountUI, turnAllFalse } from '../../store/actions/actions_ui';

const Dashboard = (props) => {
    useEffect(() => {
        const module = document.querySelector('.module-wrapper');
        module.setAttribute('style', 'left: 50%; transform: translateX(-50%)');
        // props.dispatch(turnAllFalse())
        // setTimeout(() => {
        //     props.dispatch(toggleAccountUI())
        // }, 500);

        return () => {
            module.removeAttribute('style', 'left: 50%; transform: translateX(-50%)');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>

            {
                props.location.pathname === '/user/dashboard' ?
                    <HomeDashboard {...props} />
                    : props.subRoutes.map((route, i) => (
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