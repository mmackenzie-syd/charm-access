import React, {useEffect, useRef, useState} from 'react';
import './Categories.css';
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import {Link} from "react-router-dom";
import placeholder from '../screens/placeholder.png';
import Slide from "./Slide.js"

function Categories() {
    const ref = useRef(null);
    const [slideWidth, setSlideWidth] = useState(1000);
    const [offset, setOffset] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [activeSlide, setActiveSlide] = useState(1);

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

    const categories = [
        {
            id: 1,
            name: 'Brooches',
            qty: 11,
            image: './products/1_thb.jpg'
        },
        {
            id: 2,
            name: 'Bracelets',
            qty: 7,
            image: './products/2_thb.jpg'
        },
        {
            id: 3,
            name: 'Earrings',
            qty: 5,
            image: './products/3_thb.jpg'
        },
        {
            id: 4,
            name: 'Necklaces',
            qty: 11,
            image: './products/1_thb.jpg'
        },
        {
            id: 5,
            name: 'Rings',
            qty: 7,
            image: './products/2_thb.jpg'
        }
    ];

    const perSlide = 3;
    let numberOfSlides = Math.floor(categories.length / perSlide);
    if (categories.length % perSlide > 0) {
        numberOfSlides = numberOfSlides + 1;
    }
    const slides = [...Array(numberOfSlides).keys()].map(key => key + 1);

    let  maxOffset = -1 * (slides.length - 1);

    const handleLeft = () => {
        setIsSliding(true);
        if (offset < 0) {
            setOffset(offset + slideWidth );
            setActiveSlide(activeSlide - 1);
        }
    }
    const handleRight = () => {
        setIsSliding(true);
        if (offset > maxOffset * slideWidth ) {
            setOffset(offset - slideWidth );
            setActiveSlide(activeSlide + 1);
        }
    }

    let leftArrowClass = (offset < 0) ? 'slider_control icon-arrow' : 'slider_control icon-arrow icon-arrow-disabled';
    let rightArrowClass = (offset > maxOffset * slideWidth) ? 'slider_control icon-arrow' : 'slider_control icon-arrow icon-arrow-disabled';

    return (
        <section className="category">
            <div className="row  margin-bottom-1">
                <h3>By Category</h3>
                <div>
                    <span onClick={handleLeft}>
                        <LeftArrowIcon
                            className={leftArrowClass}
                            width={'1.2rem'}
                            height={'1.2rem'}
                            offset={'.3rem'}
                        />
                    </span>
                    <span onClick={handleRight}>
                        <RightArrowIcon
                            className={rightArrowClass}
                            width={'1.2rem'}
                            height={'1.2rem'}
                            offset={'.3rem'}
                        />
                    </span>
                </div>
            </div>
            <div className="slide-container" ref={ref}>
                {/* added hidden dummy item so that slide container has a height */}
                <ul className="category__grid hidden" >
                    <li className="category__grid-item">
                        <div className="category__grid-img-container">
                            <Link to="">
                                <img  className="category__grid-img" src={placeholder} />
                            </Link>
                        </div>
                        <h2>&nbsp;<mark>&nbsp;</mark></h2>
                    </li>
                </ul>
                {
                    slides.map(slide => {
                        const categoriesPerSlide = categories.slice((slide - 1) * perSlide, slide * perSlide);
                        return(
                            <Slide x={(slide - 1) * slideWidth + offset} key={slide} i={slide} width={slideWidth} isSliding={isSliding}>
                                <ul className="category__grid" >
                                    {
                                        categoriesPerSlide.map(category => (
                                            <li key={category.id} className="category__grid-item">
                                                <div className="category__grid-img-container">
                                                    <Link to="/collections/brooches/1">
                                                        <img  className="category__grid-img" src={category.image} />
                                                    </Link>
                                                </div>
                                                <h2>{category.name}&nbsp;<mark>({category.qty})</mark></h2>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Slide>
                        );
                    })
                }
            </div>
            <ul className="slider-dots">
                {
                    slides.map(slide => {
                        const sliderDotsClass = (slide === activeSlide) ? 'slider-dot slider-dot-active' : 'slider-dot';
                        return (
                            <li key={slide} className={sliderDotsClass}>&nbsp;</li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

export default Categories;
