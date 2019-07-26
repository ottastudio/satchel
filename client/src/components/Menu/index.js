import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getBrands } from '../../store/actions/actions_products';

import { NavLink, Link } from 'react-router-dom';
import { Tween, SplitLetters } from 'react-gsap';

const Menu = (props) => {
    const [state, setState] = useState({ loading: true })
    useEffect(() => {
        props.dispatch(getBrands())
        setTimeout(() => {
            setState({ loading: false })
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderLink = (brands) => (
        brands ?
            brands.map(item => (
                <NavLink
                    key={item._id}
                    activeClassName='menu-active'
                    to={`/product/${item.name}`}
                >{item.name}</NavLink>
            ))
            : null
    )

    return (
        <div className='main-menu'>
            <header className='main-menu__header'>
                <Link to='/' className='main-menu__header__logo'>
                    <Tween staggerFrom={{ display: 'none' }} duration={7} stagger={0.3}>
                        <SplitLetters><span>Satchel</span></SplitLetters>
                    </Tween>
                </Link>
            </header>
            <div className='main-menu__content'>
                {state.loading ? 'loading...' : renderLink(props.products.brands)}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Menu);