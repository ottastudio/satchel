import React from 'react';
import authentication from '../../hoc/authentication';
import { Container } from '../../hoc/global';

const Dashboard = () => {
    return (
        <Container>
            Dashboard
        </Container>
    );
};

export default authentication(Dashboard, true);