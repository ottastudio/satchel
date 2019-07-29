// eslint-disable-next-line
import React, { useEffect, useRef, useState } from 'react';
import './home.scss';
import { Container } from '../../hoc/global';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsByArrival } from '../../store/actions/actions_products';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, SplitLetters } from 'react-gsap';
import { Card, CoverLetter } from './components';
import SEO from '../utils/seo';
// import { toggleSearchUI } from '../../store/actions/actions_ui';

const Home = (props) => {
    const [showCard, setShowCard] = useState(false)

    useEffect(() => {
        props.dispatch(getProductsByArrival())
        // props.dispatch(toggleSearchUI())
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const noScroll = () => window.scrollTo(0, 0)

    const ref = useRef();

    const renderArticles = (prod, progress, event) => (
        prod ?
            prod.map((item, i) => (
                <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    duration={1}
                    playState={showCard ? 'play' : 'stop'}
                    key={i}
                >
                    <div className='slide-container__content' key={i}>
                        {showCard ? 
                            <Card ref={ref} totalProgress={progress} event={event} index={i} {...item} />    
                            : null
                        }
                    </div>
                </Tween>
            ))
            : null
    )

    return (
        <Container name='home'>
            <SEO title={`Hei, I'm`} />
            <Controller>
                <Scene duration='1000%' triggerHook='onLeave' pin>
                    {(progress, event) => (
                        <div className='horizontal-container'>
                            <Tween to={{ xPercent: -50 }} totalProgress={progress} paused>
                                <div className='slide-container'>
                                    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2}>
                                        <div className='slide-container__content'>
                                            <CoverLetter setShowCard={() => setShowCard(true)} {...props} />
                                        </div>
                                    </Tween>

                                    {renderArticles(props.products.byArrival, progress, event)}

                                    <div className='slide-container__content'>
                                        {showCard ?
                                            <Link className='home-card' to='/product'>
                                                See all products.
                                            </Link>
                                            : null}
                                    </div>
                                    <div className='slide-container__content'/>
                                    <div className='slide-container__content'/>
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