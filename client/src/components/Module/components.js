import React from 'react';
// import accountIcon from '../../assets/images/icons/outline-face-24px.svg';
// import Authentication from '../../hoc/authentication';

import { CSSTransition, Transition } from 'react-transition-group';
import Account from '../Account';
import Menu from '../Menu';

const defStyle = { opacity: 0 }
const transStyle = {
    entering: { opacity: 0, transition: '500ms cubic-bezier(1,0,0,1)' },
    entered: { opacity: 1, transition: '500ms cubic-bezier(1,0,0,1)' },
    exiting: { opacity: 0, transition: '250ms cubic-bezier(1,0,0,1)' },
    exited: { opacity: 0 },
}

const ModuleContainer = props => {

    let template = null
    switch (props.type) {
        case 'menu':
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
                                    left: props.state ? 15 : 10
                                }}
                            >
                                <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                            </svg>
                        </div>
                        <Transition
                            in={props.state}
                            timeout={{
                                enter: 1000,
                                exit: 250
                            }}
                            mountOnEnter unmountOnExit
                        >
                            {state => (
                                <div className='module__container' style={{ ...defStyle, ...transStyle[state] }}>
                                    <Menu />
                                </div>
                            )}
                        </Transition>
                    </div>
                </CSSTransition>
            )
            break;
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
                                    left: props.state ? 15 : 10
                                }}
                            >
                                <circle cx="15.5" cy="9.5" r="1.5" />
                                <circle cx="8.5" cy="9.5" r="1.5" />
                                <path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                            </svg>
                        </div>
                        <Transition
                            in={props.state}
                            timeout={{
                                enter: 1000,
                                exit: 250
                            }}
                            mountOnEnter unmountOnExit
                        >
                            {state => (
                                <div className='module__container' style={{ ...defStyle, ...transStyle[state] }}>
                                    <Account {...props} />
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
                                    right: props.state ? 15 : 10
                                }}
                            >
                                <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                        </div>
                        <Transition
                            in={props.state}
                            timeout={{
                                enter: 1000,
                                exit: 250
                            }}
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
        case 'search':
            template = (
                <CSSTransition
                    in={props.state}
                    timeout={500}
                    classNames='module-search'
                >
                    <div className='module-search'>
                        <Transition
                            in={props.state}
                            timeout={{
                                enter: 1000,
                                exit: 250
                            }}
                            mountOnEnter unmountOnExit
                        >
                            {state => (
                                <input
                                    type='text'
                                    autoFocus={true}
                                    spellCheck={false}
                                    placeholder='Hit enter after typing...'
                                    // placeholder={state}
                                    className='module__container'
                                    style={{
                                        ...defStyle, ...transStyle[state]
                                    }}
                                />
                            )}
                        </Transition>
                        <div onClick={props.onClick} className={`module-search__icon-${props.type}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </div>
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