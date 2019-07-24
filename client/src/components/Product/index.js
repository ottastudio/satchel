import React, { Component } from 'react';
import { Container } from '../../hoc/global';

import { connect } from 'react-redux';
import { getProductDetail, clearProductDetail } from '../../store/actions/actions_products';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

class Product extends Component {
    state = {
        loading: true
    }
    componentDidMount = () => {
        const id = this.props.match.params.id;
        this.props.dispatch(getProductDetail(id)).then(res => {
            if (!this.props.products.detail) {
                this.setState({ loading: true })
            } else {
                setTimeout(() => {
                    this.setState({ loading: false })
                }, 500);
            }
        })
    };

    componentWillUnmount = () => {
        this.props.dispatch(clearProductDetail())
    };


    render() {
        const { dispatch, history, match, location, products, user } = this.props;
        const article = products.detail;
        console.log(article)

        const style = {
            li: {
                position: 'relative',
                flexBasis: '33.33%',
            }
        }

        if (this.state.loading) {
            return null
        }
        return (
            <Container>
                <Controller>
                    <Scene duration='600%' triggerHook='onLeave' pin indicators>
                        {(progress, event) => (
                            <div className='horizontal-container'>
                                <Tween
                                    to={{ xPercent: -50 }}
                                    totalProgress={progress}
                                    paused
                                >
                                    <ul
                                        className='slide-container'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <li style={style.li}>{article.name}</li>
                                        <li style={style.li}>{article.category.name}</li>
                                        <li style={style.li}>{article.gender.name}</li>
                                        <li style={style.li}>{article.usable.name}</li>
                                        <li style={style.li}>{article.series.name}</li>
                                        <li style={style.li}>{article.description}</li>
                                    </ul>
                                </Tween>
                            </div>
                        )}
                    </Scene>
                </Controller>
            </Container>
        );
    }

};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Product);