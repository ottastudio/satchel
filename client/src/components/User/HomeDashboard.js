import React from 'react';

const HomeDashboard = (props) => {
    return (
        <div
            style={{
                padding: '120px 40px 40px',
                minHeight: '200vh'
            }}
        >
            <div>{props.user.userData.firstname} {props.user.userData.lastname}</div>
        </div>
    );
};

export default HomeDashboard;