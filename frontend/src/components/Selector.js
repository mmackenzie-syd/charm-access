import React, { useState,  useEffect, useRef} from 'react';
import './Selector.css';

function Selector(props) {
    const [selectedIndex, setSelectedIndex] = useState( 1);
    const wrapperRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // below is the same as componentDidMount and componentDidUnmount
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    const Options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => {
        const sameAsSelected = (value === selectedIndex) ? 'same-as-selected' : '';
        return (
            <div className={sameAsSelected} onClick={() => onSelect(value)}>
                {value}
            </div>
        );
    });

    const onSelect = (value) => {
        setSelectedIndex(value);
        setIsVisible(false);
        props.callback(value);
    };

    const onToggle = () => {
        if (isVisible) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }

    return (
        <div className="custom-select" ref={wrapperRef}>
            <span className="custom-select-label">number</span>
            <div className="select-selected" onClick={onToggle}>{selectedIndex}</div>
            { isVisible && <div className="select-items">{Options}</div> }
        </div>
    );
}

export default Selector;
