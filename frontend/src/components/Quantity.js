import React, { useState } from 'react';
import './Quantity.css';

function Quantity(props) {
    const { value, onSubBtn, onPlusBtn} = props;
    return (
        <div className="quantity">
            <button onClick={onSubBtn} className="quantity__btn">-</button>
            <div className="quantity__value">{value}</div>
            <button onClick={onPlusBtn} className="quantity__btn">+</button>
        </div>
    );
}

export default Quantity;
