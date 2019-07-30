import React, { Component } from 'react';
import { Container } from '../../../hoc/global';

import { connect } from 'react-redux';
import { getProductDetail, clearProductDetail } from '../../../store/actions/actions_products';
import { toggleCartUI } from '../../../store/actions/actions_ui';

import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import SEO from '../../utils/seo';

// import jpg1 from '../../../assets/images/sample1.jpg';
// import jpg2 from '../../../assets/images/sample2.jpg';
import jpg3 from '../../../assets/images/sample3.jpg';

class ProductDetail extends Component {
    state = {
        loading: true
    }
    componentDidMount = () => {
        const id = this.props.match.params.id;
        // const homeLink = document.querySelector('.home-link');
        // const module = document.querySelector('.module-wrapper');

        // homeLink.setAttribute('style', 'top: 20px; left: 20px;');
        // module.setAttribute('style', 'top: 20px; left: 120px;');
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
        this.props.dispatch(clearProductDetail());
        // const homeLink = document.querySelector('.home-link');
        // const module = document.querySelector('.module-wrapper');
        // homeLink.removeAttribute('style');
        // module.removeAttribute('style');
    };


    render() {
        // eslint-disable-next-line
        const { products, user } = this.props;
        const article = products.detail;
        console.log(article)

        const capitalize = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }

        if (this.state.loading) {
            return null
        }
        return (
            <Container name='product-detail'>
                <SEO title={`${capitalize(article.name)} by`} />
                <div className='product-info'>
                    <div className='product-info__header'>
                        <div className='product-info__header-name'>{capitalize(article.name)},<br />by {capitalize(article.brand.name)}.</div>
                        <div className='product-info__header-price'>Idr. {article.price}</div>
                    </div>
                    <div className='product-info__category' style={{ fontSize: 24 }}>
                        {/* {capitalize(article.category.name)} for {article.gender.name}, on {capitalize(article.series.name)} series. */}
                        {capitalize(article.category.name)} for {article.gender.name}{article.series ? `, on ${capitalize(article.series.name)} series.` : null}
                    </div>
                    <div>{article.description}</div>
                </div>
                <Controller>
                    <Scene duration='600%' triggerHook='onLeave' pin indicators>
                        {(progress, event) => (
                            <div className='horizontal-container'>
                                <Tween
                                    to={{ xPercent: -50 }}
                                    totalProgress={progress}
                                    paused
                                >
                                    <ul className='slide-container'>
                                        <li className='slide-container__content' />
                                        <li
                                            className='slide-container__content'
                                            style={{
                                                flexBasis: '66.66%',
                                                backgroundImage: `url('${jpg3}')`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover'
                                            }}
                                        />
                                        <li
                                            className='slide-container__content'
                                            style={{
                                                flexBasis: '66.66%',
                                                backgroundImage: `url('${jpg3}')`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover'
                                            }}
                                        />
                                        <li
                                            className='slide-container__content'
                                            style={{
                                                flexBasis: '66.66%',
                                                backgroundImage: `url('${jpg3}')`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover'
                                            }}
                                        />
                                        <li className='slide-container__content'>
                                            <div style={{ position: 'relative', padding: 40 }}>
                                                <span
                                                    style={{
                                                        height: 40,
                                                        border: '1px solid',
                                                        padding: '0px 15px',
                                                        display: 'inline-flex',
                                                        alignItems: 'center'
                                                    }}
                                                >Similar products</span>
                                            </div>
                                        </li>

                                        {/* Spacer fixed and should be exsit */}
                                        <li className='slide-container__content' />
                                        <li className='slide-container__content' />
                                    </ul>
                                </Tween>
                            </div>
                        )}
                    </Scene>
                </Controller>
                <div
                    className='product-detail__add-cart'
                    onClick={
                        () => {
                            this.props.dispatch(toggleCartUI())
                        }
                    }
                >Add to cart</div>
            </Container>
        );
    }

};

const mapStateToProps = state => {
    return {
        products: state.products,
        ui: state.ui
    }
}

export default connect(mapStateToProps)(ProductDetail);