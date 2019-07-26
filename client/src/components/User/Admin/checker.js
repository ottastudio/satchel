import React, { useEffect, useState } from 'react';
// import {} from 'react-router-dom';

const Checker = (props) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(props.user.userData.isAdmin){
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        }else{
            setLoading(true)
        }
    }, [])
    // console.log(props)

    if(loading){
        return 'Checking...'
    }
    return (
        <div className='container'>
            {props.children}
        </div>
    );
};

export default Checker;