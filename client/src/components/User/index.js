import React from 'react';
import authentication from '../../hoc/authentication';
import { Container } from '../../hoc/global';

const Dashboard = (props) => {
    // console.log(props)
    return (
        <Container>
            Dashboard
            {/* <div
                style={{
                    position: 'absolute',
                    top: 90,
                    left: 30,
                    fontSize: '3em'
                }}
            >
                Hello,<br/>{props.user.userData.firstname} {props.user.userData.lastname}
            </div> */}
        </Container>
    );
};

export default Dashboard;