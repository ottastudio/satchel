import React from 'react';
import { Tween, SplitLetters } from 'react-gsap';

const Loader = (props) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                height: 400,
                width: 600,
                fontSize: 24,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Tween
                staggerFrom={{ display: 'none' }}
                stagger={0.1}
                wrapper={<div/>}
                onCompleteAll={
                    () => setTimeout(() => {
                        props.setLoading(false)
                    }, 1500)
                }
            >
                <SplitLetters><span>Hello, Guest!</span></SplitLetters>
                <br />
                <br />
                <SplitLetters><span>As creators of fashion stuffs, we want to inspire and assist you in finding your comfort and personal style.</span></SplitLetters>
                <br />
                <br />
                <SplitLetters><span>We believe that fashion is made for self-expression.</span></SplitLetters>
                <br />
                <br />
                <br />
                <SplitLetters><span>"Satchel"</span></SplitLetters>
            </Tween>
        </div>
    );
};

export default Loader;