// eslint-disable-next-line
import React, { useEffect, useRef, useState } from 'react';
import './home.scss';
import { Container } from '../../hoc/global';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsByArrival } from '../../store/actions/actions_products';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, SplitLetters } from 'react-gsap';
import { Card } from './components';

const Home = (props) => {
    const [showCard, setShowCard] = useState(false)

    useEffect(() => {
        props.dispatch(getProductsByArrival())
    }, [])

    const noScroll = () => window.scrollTo(0, 0)

    const ref = useRef();

    const renderArticles = (prod, progress, event) => (
        prod ?
            prod.map((item, i) => (
                <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    duration={3}
                    playState={showCard ? 'play' : 'stop'}
                    key={i}
                >
                    <div key={i} style={{ position: 'relative', flexBasis: '33.33%', overflow: 'hidden' }}>
                        {/* {showCard ? <Card ref={ref} totalProgress={progress} index={i} {...item} /> : null} */}
                        <Card ref={ref} totalProgress={progress} event={event} index={i} {...item} />
                    </div>
                </Tween>
            ))
            : null
    )

    // console.log(props)

    return (
        <Container>
            <Controller>
                <Scene duration='1000%' triggerHook='onLeave' pin>
                    {(progress, event) => (
                        <div className='horizontal-container'>
                            <Tween
                                to={{ xPercent: -50 }}
                                totalProgress={progress}
                                paused
                            >
                                <div
                                    className='slide-container'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2}>
                                        <div style={{ flexBasis: '33.33%', position: 'relative' }}>
                                            <Controller>
                                                <Scene duration={1000} triggerHook='onCenter'>
                                                    {prog => (
                                                        <Tween to={{ opacity: 0, xPercent: 75 }} totalProgress={prog} paused>
                                                            <div
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: '50%',
                                                                    left: 40,
                                                                    width: 400,
                                                                    height: 500,
                                                                    transform: 'translateY(-50%)',
                                                                    // padding: 15,
                                                                    // border: '1px solid'
                                                                }}>
                                                                <Tween
                                                                    staggerFrom={{ display: 'none' }}
                                                                    stagger={0.05}
                                                                    onStartAll={() => {
                                                                        window.addEventListener('scroll', noScroll)
                                                                    }}
                                                                    onCompleteAll={
                                                                        () => {
                                                                            window.removeEventListener('scroll', noScroll)
                                                                            window.scrollTo(0, 1000)
                                                                            setTimeout(() => {
                                                                                setShowCard(true)
                                                                            }, 500);
                                                                        }
                                                                    }
                                                                >
                                                                    <SplitLetters><span>Dear, {props.user.userData.firstname ? `${props.user.userData.firstname}'s` : 'our lovely Customers'}.</span></SplitLetters>
                                                                    <br />
                                                                    <br />
                                                                    <br />
                                                                    <SplitLetters><span>As creators of fashion stuffs, we want to inspire and assist you in finding your comfort and personal style.</span></SplitLetters>
                                                                    <br />
                                                                    <br />
                                                                    <SplitLetters><span>We believe that fashion is made for self-expression.</span></SplitLetters>
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
                                        </div>

                                    </Tween>
                                    {renderArticles(props.products.byArrival, progress, event)}
                                    <div style={{ flexBasis: '33.33%', position: 'relative' }}>
                                        <Link
                                            to='/product'
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                width: 400,
                                                height: 500,
                                                transform: 'translate(-50%, -50%)',
                                                padding: 15,
                                                border: '1px solid'
                                            }}
                                        >
                                            See all products.
                                        </Link>
                                    </div>
                                    <div style={{ flexBasis: '33.33%', position: 'relative' }}>Space</div>
                                    <div style={{ flexBasis: '33.33%', position: 'relative' }}>Space</div>
                                </div>
                            </Tween>
                        </div>
                    )}
                </Scene>
            </Controller>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products,
        ui: state.ui
    }
}

export default connect(mapStateToProps)(Home);