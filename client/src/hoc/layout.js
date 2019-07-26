import React, { Fragment, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Module from '../components/Module';
import { Transition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import {getSiteData} from '../store/actions/actions_site';

const Layout = (props) => {
    const [scroll, setScroll] = useState(0);
    const [site, setSite] = useState()
    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 110}%`
        setScroll(scrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollProgress)
        props.dispatch(getSiteData()).then(res => {
            // console.log(res);
            setSite(res.payload[0])
        })
        return () => {
            window.removeEventListener('scroll', scrollProgress)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const globStyle = {
        borderTop: {
            position: 'fixed', left: 0, height: 1, width: '100vw', zIndex: 10000, transition: 'top 500ms cubic-bezier(1,0,0,1)', borderBottom: '1px solid', 
            top: scroll === '110%' ? 40 : -1
        },
        borderBottom: {
            position: 'fixed', left: 0, height: 1, width: '100vw', zIndex: 10000, transition: 'bottom 500ms cubic-bezier(1,0,0,1)', borderTop: '1px solid', 
            bottom: scroll === '110%' ? 40 : -1
        },
        borderLeft: {
            position: 'fixed', bottom: 0, top: 0, width: 1, height: '100vh', zIndex: 10000, transition: 'left 500ms cubic-bezier(1,0,0,1)', borderRight: '1px solid', 
            left: scroll === '110%' ? 40 : -1
        },
        borderRight: {
            position: 'fixed', bottom: 0, top: 0, width: 1, height: '100vh', zIndex: 10000, transition: 'right 500ms cubic-bezier(1,0,0,1)', borderLeft: '1px solid', 
            right: scroll === '110%' ? 40 : -1
        }
    }

    const footerTransition = {
        entering: { bottom: 0, opacity: 0 },
        entered: { bottom: 0, opacity: 1 },
        exiting: { bottom: -40, opacity: 1 },
        exited: { bottom: -40, opacity: 1 },
    }
    return (
        <Fragment>
            <div style={{ ...globStyle.borderTop }} />
            <div style={{ ...globStyle.borderBottom }} />
            <div style={{ ...globStyle.borderLeft }} />
            <div style={{ ...globStyle.borderRight }} />
            {/* <Menu /> */}
            <Module {...site} />
            <NavLink to='/' exact activeClassName='home-active' className='home-link'>
                {site ? site.name : null}
            </NavLink>
            <div
                onClick={() => window.scrollTo(0, 0)}
                style={{
                    position: 'fixed',
                    bottom: scroll === '110%' ? 40 : 0,
                    right: scroll === '110%' ? 40 : 0,
                    height: 40,
                    width: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid',
                    zIndex: 1001,
                    cursor: 'pointer',
                    transition: '500ms cubic-bezier(1,0,0,1)',
                    opacity: scroll === '110%' ? 1 : 0
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 24">
                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
                </svg>
            </div>
            {props.children}
            <Transition
                in={scroll === '110%'}
                timeout={500}
                unmountOnExit
            >
                {state => (
                    <Footer {...site} style={{ ...footerTransition[state] }} />
                )}
            </Transition>
            {/* <Footer {...site} /> */}
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        site: state.site
    }
}

export default connect(mapStateToProps)(Layout);