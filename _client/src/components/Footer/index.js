import React from 'react';

const Footer = (props) => {
    // console.log(props)
    return (
        <footer className='main-footer' style={props.style}>
            <div>
                &copy;{props.yearStart}-{new Date().getFullYear()} <span style={{textTransform: 'capitalize'}}>{props.name}</span>. All rights reserved.
            </div>
            <div>
                Design &amp; develop by <a href={props.developerLink} target='_blank' rel='noopener noreferrer' >{props.developer}</a>
            </div>
            <div>
                <a href={props.instagram} target='_blank' rel='noopener noreferrer' >Instagram</a>
            </div>
            <div>Terms of use.</div>
        </footer>
    );
};

export default Footer;