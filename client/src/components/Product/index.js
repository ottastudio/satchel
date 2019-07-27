import React, {useEffect} from 'react';
import { Container } from '../../hoc/global';

const Product = () => {
    useEffect(() => {
        const module = document.querySelector('.module-wrapper');
        module.setAttribute('style', 'left: 50%; transform: translateX(-50%)');

        return () => {
            module.removeAttribute('style', 'left: 50%; transform: translateX(-50%)');
        }
    }, [])
    return (
        <Container>
            Product
        </Container>
    );
};

export default Product;