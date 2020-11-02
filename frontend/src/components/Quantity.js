import React, { useState } from 'react';
import './Quantity.css';

function Quantity(props) {
    const [value, setValue] = useState(1);

    const onPlusBtn = () => {
        const newValue = value + 1;
        setValue(newValue);
        props.callback(value)
    }

    const onSubBtn = () => {
        const newValue = value - 1;
        if (newValue > 0) {
            setValue(newValue);
            props.callback(newValue)
        }
    }
    return (
        <div className="quantity">
            <button onClick={onSubBtn} className="quantity__btn">-</button>
            <div className="quantity__value">{value}</div>
            <button onClick={onPlusBtn} className="quantity__btn">+</button>
        </div>
    );
}

export default Quantity;
