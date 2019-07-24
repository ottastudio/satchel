// eslint-disable-next-line
import React, { useEffect, useRef } from 'react';
import './home.scss';
import { Container } from '../../hoc/global';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { getProductsByArrival } from '../../store/actions/actions_products';

import { Controller, Scene } from 'react-scrollmagic';
// eslint-disable-next-line
import { Tween } from 'react-gsap';
import { Card } from './components';

const Home = (props) => {

    useEffect(() => {
        props.dispatch(getProductsByArrival())
    }, [])

    const ref = useRef();

    const renderArticles = (prod, progress) => (
        prod ?
            prod.map((item, i) => (
                <div
                    key={i}
                    style={{
                        position: 'relative',
                        flexBasis: '33.33%'
                    }}
                >
                    <Card
                        ref={ref}
                        totalProgress={progress}
                        index={i}
                        {...item}
                    />
                </div>
            ))
            : null
    )

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
                                <div
                                    className='slide-container'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    {renderArticles(props.products.byArrival, progress)}
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