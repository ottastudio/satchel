import React, {useEffect} from 'react';
import { Container } from '../../hoc/global';
import SEO from '../utils/seo';
import './product.scss'

const Product = () => {
    useEffect(() => {
        const module = document.querySelector('.module-wrapper');
        module.setAttribute('style', 'left: 50%; transform: translateX(-50%)');

        return () => {
            module.removeAttribute('style', 'left: 50%; transform: translateX(-50%)');
        }
    }, [])
    return (
        <Container name='products'>
            <SEO title='All Products by' />
            Product
        </Container>
    );
};

export default Product;