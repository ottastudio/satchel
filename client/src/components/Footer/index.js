import React from 'react';

const Footer = (props) => {
    return (
        <footer className='main-footer' style={props.style}>
            <div>
                &copy;2019 Satchel. All rights reserved.
            </div>
            <div>
                Design &amp; develop by <a href='https://tota.studio' target='_blank' rel='noopener noreferrer' >Tota® Studio</a>
            </div>
            <div>Instagram Facebook Youtube</div>
            <div>Terms of use.</div>
        </footer>
    );
};

export default Footer;