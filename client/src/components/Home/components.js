import React, { forwardRef, useState, Fragment } from 'react';
import { Tween, SplitLetters } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';

const Card = forwardRef((props, ref) => {
    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        hover ? setHover(false) : setHover(true)
    }

    const renderImage = (images) => {
        if (images.length > 0) {
            return images[0].url
        } else {
            return '/images/sample1.jpg'
        }
    }

    const transContentStyle = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    }
    return (
        <div
            ref={ref}
            className='home-card'
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            style={{
                backgroundImage: `url('${renderImage(props.images)}')`,
                backgroundSize: hover ? '110%' : '105%'
            }}
        >
            <Transition in={hover} timeout={300} unmountOnExit>
                {state => (
                    <div className='home-card__content' style={{ ...transContentStyle[state] }}>
                        <Tween
                            staggerFrom={{ display: 'none' }}
                            stagger={0.05}
                            duration={1}
                            wrapper={<div className='home-card__content__typewritter' />}
                        >
                            <SplitLetters><span>{`${props.name},`}</span></SplitLetters>
                            <br />
                            <SplitLetters><span>{`${props.brand.name}.`}</span></SplitLetters>
                            <br />
                            <br />
                            <SplitLetters><span>{`IDR ${props.price.toString()}`}</span></SplitLetters>
                        </Tween>

                        <div className='home-card__content__bottom'>
                            {/* <Link className='link' to={`/product/${props.brand.name}/${props.category.name}/${props.usable.name}/${props.name}/${props._id}`}
                            >view</Link> */}
                            <Tween
                                staggerFrom={{ display: 'none' }}
                                stagger={0.05}
                                duration={1}
                                wrapper={
                                    <Link className='link' to={`/product/${props.brand.name}/${props.category.name}/${props.usable.name}/${props.name}/${props._id}`}/>
                                }
                            >
                                <SplitLetters><span>{`View ${props.name}`}</span></SplitLetters>
                            </Tween>
                            <div className='button-group'>
                                <div className='cart' onClick={() => console.log('cart')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </div>
                                <div className='cart' onClick={() => console.log('love')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    )
})

const CoverLetter = (props) => {
    const vh = window.innerHeight + 45
    return (
        <Controller>
            <Scene duration='100%' triggerHook='onLeave'>
                {prog => (
                    <Tween to={{ opacity: 0, xPercent: 50 }} totalProgress={prog} paused>
                        <div className='home-card' style={{ border: 'none' }}>
                            <Tween
                                staggerFrom={{ display: 'none' }}
                                stagger={0.05}
                                onCompleteAll={
                                    () => {
                                        window.scrollTo(0, vh)
                                        setTimeout(() => {
                                            props.setShowCard()
                                        }, 500);
                                    }
                                }
                            >
                                <SplitLetters>
                                    <span>
                                        {`Dear, ${props.user.userData.firstname ? `${props.user.userData.firstname}'s` : 'our lovely customers' }.`}
                                        {/* Dear, {props.user.userData.firstname ? `${props.user.userData.firstname}'s` : 'our lovely Customers'}. */}
                                    </span>
                                </SplitLetters>
                                <br />
                                <br />
                                <br />
                                <SplitLetters>
                                    <span>
                                        As creators of fashion stuffs, we want to inspire and assist you in finding your comfort and personal style.
                                    </span>
                                </SplitLetters>
                                <br />
                                <br />
                                <SplitLetters>
                                    <span>
                                        We believe that fashion is made for self-expression.
                                    </span>
                                </SplitLetters>
                                <br />
                                <br />
                                <SplitLetters><span>Sincerely,</span></SplitLetters>
                                <br />
                                <SplitLetters><span>Satchel</span></SplitLetters>
                            </Tween>
                        </div>
                    </Tween>
                )}
            </Scene>
        </Controller>
    )
}

export { Card, CoverLetter };