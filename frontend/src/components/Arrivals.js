import React, {useEffect, useRef, useState} from 'react';
import './Arrivals.css';
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import {Link} from "react-router-dom";
import placeholder from '../screens/placeholder.png';
import Slide from "./Slide.js"

function Arrivals() {
    const ref = useRef(null);
    const [slideWidth, setSlideWidth] = useState(1000);
    const [offset, setOffset] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        // detect window resize and get slide width again
        const handleWindowResize = () => {
            setIsSliding(false);
            if(ref.current){
                setSlideWidth(ref.current.offsetWidth);
            }
        }
        window.addEventListener("resize", handleWindowResize);
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect( () => {
        // get initial slide width
        if(ref.current){
            setSlideWidth(ref.current.offsetWidth);
        }
    }, [ref]);

    const arrivals = [
        {
            _id: '1',
            name: 'Rose Bouquet Brooch',
            category: 'brooches',
            image: '/products/1.jpg',
            thumbnail: '/products/1_thb.jpg',
            price: 120,
        },
        {
            _id: '2',
            name: 'Rose Butterfly Brooch',
            category: 'brooches',
            image: '/products/2.jpg',
            thumbnail: '/products/2_thb.jpg',
            price: 120,
        },
        {
            _id: '3',
            name: 'Single Rose Brooch',
            category: 'brooches',
            image: '/products/3.jpg',
            thumbnail: '/products/3_thb.jpg',
            price: 120,
        },
        {
            _id: '4',
            name: 'White Butterfly Brooch',
            category: 'brooches',
            image: '/products/4.jpg',
            thumbnail: '/products/4_thb.jpg',
            price: 120,
        },
        {
            _id: '5',
            name: 'Elephant Brooch',
            category: 'brooches',
            image: '/products/5.jpg',
            thumbnail: '/products/5_thb.jpg',
            price: 120,
        },
        {
            _id: '6',
            name: 'Blue Topaz Butterfly Brooch',
            category: 'brooches',
            image: '/products/6.jpg',
            thumbnail: '/products/6_thb.jpg',
            price: 120,
        },
        {
            _id: '7',
            name: 'Puppy Dog Brooch',
            category: 'brooches',
            image: '/products/7.jpg',
            thumbnail: '/products/7_thb.jpg',
            price: 120,
        },
        {
            _id: '8',
            name: 'Lilly Flower  Brooch',
            category: 'brooches',
            image: '/products/8.jpg',
            thumbnail: '/products/8_thb.jpg',
            price: 120,
        },
    ];

    const perSlide = 4;
    let numberOfSlides = Math.floor(arrivals.length / perSlide);
    if (arrivals.length % perSlide > 0) {
        numberOfSlides = numberOfSlides + 1;
        console.log('numberOfSlides', numberOfSlides)
    }
    const slides = [...Array(numberOfSlides).keys()].map(key => key + 1);

    let  maxOffset = -1 * (slides.length - 1);

    const handleLeft = () => {
        setIsSliding(true);
        if (offset < 0) {
            setOffset(offset + slideWidth );
        }
    }
    const handleRight = () => {
        setIsSliding(true);
        if (offset > maxOffset * slideWidth ) {
            setOffset(offset - slideWidth );
        }
    }

    return (
        <section className="arrivals">
            <div className="row  margin-bottom-1">
                <h3>Recent Arrivals</h3>
                <div>
                    <span onClick={handleLeft}>
                        <LeftArrowIcon
                            className={'slider_control icon-arrow slider_control_disabled'}
                            width={'1.2rem'}
                            height={'1.2rem'}
                            fill={'#9192a3'}
                            offset={'.3rem'}
                        />
                    </span>
                    <span onClick={handleRight}>
                        <RightArrowIcon
                            className={'slider_control icon-arrow'}
                            width={'1.2rem'}
                            height={'1.2rem'}
                            fill={'#9192a3'}
                            offset={'.3rem'}
                        />
                    </span>
                </div>
            </div>
            <div className="slide-container" ref={ref}>
                {/* added hidden dummy item so that slide container has a height */}
                <ul className="arrivals__grid hidden" >
                    <li className="arrivals__grid-item">
                        <div className="arrivals__grid-img-container">
                            <Link to="">
                                <img  className="arrivals__grid-img" src={placeholder} />
                            </Link>
                        </div>
                        <h2>&nbsp;</h2>
                        <p className="price">&nbsp;</p>
                    </li>
                </ul>
                {
                    slides.map(slide => {
                        const arrivalsPerSlide = arrivals.slice((slide - 1) * perSlide, slide * perSlide);
                        return(
                            <Slide x={(slide - 1) * slideWidth + offset} key={slide} i={slide} width={slideWidth} isSliding={isSliding}>
                                <ul className="arrivals__grid" >
                                    {
                                        arrivalsPerSlide.map(arrival => (
                                            <li key={arrival._id} className="arrivals__grid-item">
                                                <div className="arrivals__grid-img-container">
                                                    <Link to="">
                                                        <img  className="arrivals__grid-img" src={arrival.thumbnail} />
                                                    </Link>
                                                </div>
                                                <h2>{arrival.name}</h2>
                                                <p className="price">${arrival.price}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Slide>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Arrivals;
