// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './home.scss';
import { Container } from '../../hoc/global';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { getProductsByArrival } from '../../store/actions/actions_products';

import { Controller, Scene } from 'react-scrollmagic';
// eslint-disable-next-line
import { Timeline, Tween, SplitLetters } from 'react-gsap';

import jpg1 from '../../assets/images/sample1.jpg';
import jpg2 from '../../assets/images/sample2.jpg';
import authentication from '../../hoc/authentication';

const Home = (props) => {
    // const [state, setState] = useState({ showThumb1: false, showThumb2: false })

    // useEffect(() => {
    //     dispatch(getProductsByArrival()).then(res => {
    //         console.log(res.payload);
    //     })
    // }, [dispatch])

    // console.log(props)

    return (
        <Container>
            <Controller>
                <Scene duration='600%' triggerHook='onLeave' pin>
                    {(progress, event) => (
                        <div className='horizontal-container'>
                            <Tween
                                to={{ xPercent: -50 }}
                                totalProgress={progress}
                                paused
                            >
                                <div className='slide-container'>
                                    <Tween
                                        // progress={state.showThumb1}
                                        // paused
                                        from={{ opacity: 0 }}
                                        to={{ opacity: 1 }}
                                        duration={1}
                                    >
                                        <div>
                                            <Link to='/product/basico/mantap'>
                                                <Tween
                                                    from={{ css: {left: '20vw', filter: 'grayscale(1)'} }}
                                                    to={{ left: '100vw', filter: 'grayscale(0)' }}
                                                    totalProgress={progress}
                                                    paused
                                                >
                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            height: 500,
                                                            width: 400,
                                                            left: '20vw',
                                                            bottom: 30,
                                                            backgroundImage: `url('${jpg2}')`,
                                                            backgroundPosition: 'center center',
                                                            backgroundSize: 'cover',
                                                            border: '1px solid',
                                                            filter: 'grayscale(1)',
                                                            transform: 'translateX(-50%)'
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                position: 'absolute',
                                                                top: '50%',
                                                                left: '50%',
                                                                transform: 'translate(-50%, -50%)'
                                                            }}
                                                        >
                                                            Satchel
                                                        </div>
                                                    </div>
                                                </Tween>
                                            </Link>
                                        </div>
                                    </Tween>
                                    <Tween
                                        // progress={state.showThumb2}
                                        // paused
                                        from={{ opacity: 0 }}
                                        to={{ opacity: 1 }}
                                        duration={1}
                                    >
                                        <div>
                                            <Link to='/product/satchel/gela'>
                                                <Tween
                                                    from={{ left: '80vw', filter: 'grayscale(1)' }}
                                                    to={{ left: '100vw', filter: 'grayscale(0)' }}
                                                    totalProgress={progress}
                                                    paused
                                                >
                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            height: 500,
                                                            width: 400,
                                                            left: '80vw',
                                                            top: 30,
                                                            backgroundImage: `url('${jpg1}')`,
                                                            backgroundPosition: 'center center',
                                                            backgroundSize: 'cover',
                                                            border: '1px solid',
                                                            filter: 'grayscale(1)',
                                                            transform: 'translate(-50%)'
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                position: 'absolute',
                                                                top: '50%',
                                                                left: '50%',
                                                                transform: 'translate(-50%, -50%)'
                                                            }}
                                                        >
                                                            Satchel
                                                        </div>
                                                    </div>
                                                </Tween>
                                            </Link>
                                        </div>
                                    </Tween>

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