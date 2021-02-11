import React, {Fragment, useEffect, useState} from 'react';
import Slide from "./Slide.js"

function Slider(props) {
    const { items, perSlide, displayImage: DisplayImage, width } = props;
    const [slideWidth, setSlideWidth] = useState(2000);
    const [offset, setOffset] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect( () => {
        // set initial slide width on mount
        setSlideWidth(width);
        setIsSliding(false);
    }, [width]);

    let numberOfSlides = Math.floor(items.length / perSlide);
    if (items.length % perSlide > 0) {
        numberOfSlides = numberOfSlides + 1;
    }
    const slides = [...Array(numberOfSlides).keys()].map(key => key + 1);

    let  maxOffset = -1 * (slides.length - 1);

    const handleLeft = () => {
        setIsSliding(true);
        if (offset < 0) {
            setOffset(offset + 1 );
            setActiveSlide(activeSlide - 1);
        }
    }
    const handleRight = () => {
        setIsSliding(true);
        if (offset > maxOffset) {
            setOffset(offset - 1 );
            setActiveSlide(activeSlide + 1);
        }
    }

    const handleEvent = (event) => {
        switch (event) {
            case 'LEFT_CLICK':
                handleLeft();
                break;
            case 'RIGHT_CLICK':
                handleRight();
                break;
            default:
                break;
        }

        if (offset < 0) {
            return 'LEFT_ARROW_DISABLED';
        }
        if (offset > maxOffset * slideWidth) {
            return 'RIGHT_ARROW_DISABLED';
        }
        return '';
    }

    // set callbacks
    props.setHandleEvent(handleEvent);

    return (
        <Fragment>
            <div className="slide-container">
                {/* added hidden dummy item so that slide container has a height */}
                <div className="hidden" style={{width: slideWidth}}>
                    <DisplayImage items={[items[0]]} />
                </div>
                {
                    slides.map(slide => {
                        const itemsPerSlide = items.slice((slide - 1) * perSlide, slide * perSlide);
                        return(
                            <Slide x={(slide - 1) * slideWidth + offset * slideWidth} key={slide} i={slide} width={slideWidth} isSliding={isSliding}>
                                <DisplayImage items={itemsPerSlide} allItems={items}/>
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
