import React, { useState } from 'react';
import './Quantity.css';

function Quantity(props) {
    const { value, onSubBtn, onPlusBtn} = props;
    return (
        <div className="quantity">
            <button onClick={onSubBtn} type="button" className="btn btn-icon btn-secondary quantity-btn">-</button>
            <div className="quantity-value">{value}</div>
            <button onClick={onPlusBtn} type="button" className="btn btn-icon btn-secondary quantity-btn">+</button>
        </div>
    );
}

export default Quantity;
