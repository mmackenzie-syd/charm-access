import React, {Fragment, useEffect, useRef, useState} from 'react';
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import Slide from "./Slide.js"

function Slider(props) {
    const { caption, items, perSlide, displayImage: DisplayImage, initialWidth } = props;
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
        if (ref.current){
            setSlideWidth(ref.current.offsetWidth);
        }
    }, [ref]);

    useEffect( () => {
        // set initial slide width on mount
        setSlideWidth(initialWidth);
    }, []);

    let numberOfSlides = Math.floor(items.length / perSlide);
    if (items.length % perSlide > 0) {
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

    let leftArrowDisabled = (offset < 0) ? '' : 'btn-disabled';
    let rightArrowDisabled = (offset > maxOffset * slideWidth) ? '' : 'btn-disabled';

    return (
        <Fragment>
            <div className="row  margin-bottom-1">
                <h3 className="margin-bottom-2">{caption}</h3>
                <div>
                    <button className={`btn btn-icon btn-secondary  ${leftArrowDisabled}`}  onClick={handleLeft}>
                        <LeftArrowIcon
                            width={'1.2rem'}
                            height={'1.2rem'}
                            offset={'.3rem'}
                        />
                    </button>
                    <button className={`btn btn-icon btn-secondary  ${rightArrowDisabled}`} onClick={handleRight}>
                        <RightArrowIcon
                            width={'1.2rem'}
                            height={'1.2rem'}
                            offset={'.3rem'}
                        />
                    </button>
                </div>
            </div>
            <div className="slide-container" ref={ref}>
                {/* added hidden dummy item so that slide container has a height */}
                <div className="hidden">
                    <DisplayImage items={[items[0]]} />
                </div>
                {
                    slides.map(slide => {
                        const itemsPerSlide = items.slice((slide - 1) * perSlide, slide * perSlide);
                        return(
                            <Slide x={(slide - 1) * slideWidth + offset} key={slide} i={slide} width={slideWidth} isSliding={isSliding}>
                                <DisplayImage items={itemsPerSlide} />
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
        </Fragment>
    );
}

export default Slider;
