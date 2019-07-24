import React, {useEffect} from 'react';
import { Container } from '../../hoc/global';

const Product = (props) => {
    // useEffect(() => {
    //     const menu = document.querySelector('.main-menu');
    //     const module = document.querySelector('.module-wrapper');
    //     menu.setAttribute('style', 'right: calc(100vw - 429px); top: calc(50% - 250px); transition: 500ms cubic-bezier(1,0,0,1)');
        
    //     return () => {
    //         menu.setAttribute('style', 'right: 30px; top: 30px; transition: 500ms cubic-bezier(1,0,0,1)');
    //         setTimeout(() => {
    //             menu.removeAttribute('style', 'transition: 500ms cubic-bezier(1,0,0,1)')
    //         }, 500);
    //     }
    // }, [])
    return (
        <Container>
            Product
            <div
                style={{
                    width: 400,
                    height: 500,
                    position: 'absolute',
                    top: '50%',
                    left: '25%',
                    transform: 'translate(-50%, -50%)',
                    border: '1px solid'
                }}
            />
        </Container>
    );
};

export default Product;