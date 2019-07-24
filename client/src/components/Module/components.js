import React from 'react';
// import accountIcon from '../../assets/images/icons/outline-face-24px.svg';
// import Authentication from '../../hoc/authentication';

import { CSSTransition, Transition } from 'react-transition-group';
import Account from '../Account';

const defStyle = { opacity: 0 }
const transStyle = {
    entering: { opacity: 0, transition: '500ms cubic-bezier(1,0,0,1) 500ms' },
    entered: { opacity: 1, transition: '500ms cubic-bezier(1,0,0,1) 500ms' },
    exiting: { opacity: 0, transition: '350ms cubic-bezier(1,0,0,1)' },
    exited: { opacity: 0 },
}
const ModuleContainer = props => {

    let template = null
    switch (props.type) {
        case 'account':
            template = (
                <CSSTransition
                    in={props.state}
                    timeout={500}
                    classNames='module'
                >
                    <div className='module'>
                        <div onClick={props.onClick} className={`module__icon-${props.type}`} >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="18" 
                                height="18" 
                                viewBox="0 0 24 24"
                                style={{
                                    left: props.state ? 15:5
                                }}
                            >
                                <path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" />
                            </svg>
                        </div>
                        <Transition
                            in={props.state}
                            timeout={500}
                            mountOnEnter unmountOnExit
                        >
                            {state => (
                                <div className='module__container' style={{ ...defStyle, ...transStyle[state] }}>
                                    <Account {...props}/>
                                </div>
                            )}
                        </Transition>
                    </div>
                </CSSTransition>
            )
            break;

        case 'cart':
            template = (
                <CSSTransition
                    in={props.state}
                    timeout={500}
                    classNames='module'
                >
                    <div className='module'>
                        <div onClick={props.onClick} className={`module__icon-${props.type}`}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="18" 
                                height="18" 
                                viewBox="0 0 24 24"
                                style={{
                                    right: props.state ? 15:5
                                }}
                            >
                                <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                        </div>
                        <Transition
                            in={props.state}
                            timeout={500}
                            mountOnEnter unmountOnExit
                        >
                            {state => (
                                <div className='module__container' style={{ ...defStyle, ...transStyle[state] }}>Cart</div>
                            )}
                        </Transition>
                    </div>
                </CSSTransition>
            )
            break;

        default:
            template = null
    }
    return template
}

export { ModuleContainer };