import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getBrands } from '../../store/actions/actions_products';

import { NavLink } from 'react-router-dom';
import { globalLink, companyLink } from '../utils/links';

const Menu = (props) => {
    // eslint-disable-next-line
    const [state, setState] = useState({ loading: true })
    useEffect(() => {
        props.dispatch(getBrands())
        setTimeout(() => {
            setState({ loading: false })
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='main-menu'>
            <div className='main-menu__content'>
                <div className='account-admin-link'>
                    {
                        globalLink.map(({ link, title, exact }) => (
                            <NavLink
                                key={title}
                                to={link}
                                exact={exact}
                                activeClassName='account-admin-link__active'
                                className='account-admin-link__link'
                            >
                                {title}
                            </NavLink>
                        ))
                    }
                </div>
                <div className='account-admin-link'>
                    {
                        companyLink.map(({ link, title, exact }) => (
                            <NavLink
                                key={title}
                                to={link}
                                exact={exact}
                                activeClassName='account-admin-link__active'
                                className='account-admin-link__link'
                            >
                                {title}
                            </NavLink>
                        ))
                    }
                </div>
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