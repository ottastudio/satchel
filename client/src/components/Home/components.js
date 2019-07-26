import React, { forwardRef, useState } from 'react';
import { Tween, SplitLetters } from 'react-gsap';
import { Link } from 'react-router-dom';
// import './home.scss';

const Card = forwardRef((props, ref) => {
    // console.log(props)
    const [hover, setHover] = useState(false)

    const toggleHover = () => {
        hover ? setHover(false) : setHover(true)
    }
    const renderImage = (images) => {
        if(images.length > 0){
            return images[0].url
        }else{
            return '/images/sample1.jpg'
        }
    }
    return (
        <Link
            className='home-card'
            ref={ref}
            style={{
                filter: hover ? 'grayscale(0)' : 'grayscale(1)',
            }}
            to={`/product/${props.brand.name}/${props.category.name}/${props.usable.name}/${props.name}/${props._id}`}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            {/* <Tween
                from={{ css: { backgroundPosition: '0% center' } }}
                to={{ css: { backgroundPosition: '-100% center' } }}
                totalProgress={props.totalProgress}
                paused
            > */}
                <div
                    style={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',
                        display: 'block',
                        backgroundImage: `url('${renderImage(props.images)}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: hover ? 'scale(1.1)':'scale(1)',
                        // filter: hover ? 'blur(0px)' : 'blur(2px)',
                        transition: 'transform 500ms cubic-bezier(1,0,0,1), filter 500ms cubic-bezier(1,0,0,1)',
                    }}
                >
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        fontSize: 24
                    }}
                >
                    {/* {props.totalProgress} */}
                    {hover ? 
                        <Tween
                            staggerFrom={{display: 'none'}}
                            stagger={0.05}
                            duration={1}
                            // totalProgress={hover}
                            // paused
                            playState={hover ? 'play':'pause'}
                            // onCompleteAll={}
                        >
                            <SplitLetters><span>{props.name}</span></SplitLetters>
                            <br/>
                            <SplitLetters><span>{props.brand.name}</span></SplitLetters>
                            <br/>
                            <SplitLetters><span>{props.price.toString()}</span></SplitLetters>
                        </Tween>
                        
                        :null}
                </div>
            {/* </Tween> */}
        </Link>
    )
})

export { Card };