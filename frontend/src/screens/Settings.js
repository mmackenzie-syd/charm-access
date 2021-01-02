import React, {useEffect, useState} from 'react';
import './Settings.css';
import {resetCategories, resetProducts} from "../api/authApi";

function Settings() {

    const handleResetCategories = () => {
        const result = resetCategories();
        console.log('reset categories', result);
    }

    const handleResetProducts = () => {
        const result = resetProducts();
        console.log('reset products', result);
    }

    return (
        <div className="reset">
            <p className="margin-bottom">WARNING:</p>
            <p>ALL DATA WILL BE ERASED FROM THE DATABASE AND IT WILL BE RETURNED
                TO THE DEFAULT STATE WITH SEED DATA.</p>
            <hr className="reset-divider"/>
            <div className="row">
                <p>RESET CATEGORIES</p>
                <button
                    className="btn reset-btn"
                    type="button"
                    onClick={handleResetCategories}
                >
                    RESET
                </button>
            </div>
            <hr className="reset-divider"/>
            <div className="row">
                <p>RESET PRODUCTS</p>
                <button
                    className="btn reset-btn"
                    type="button"
                    onClick={handleResetProducts}
                >
                    RESET
                </button>
            </div>
        </div>);
}

export default Settings;
