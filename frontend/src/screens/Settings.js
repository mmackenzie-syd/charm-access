import React, {useEffect, useState} from 'react';
import './Settings.css';
import {useHistory} from "react-router";
import PlusIcon from "../icons/PlusIcon";
import CrossIcon from "../icons/CrossIcon";

function ResetPassword(props) {

    const handleResetCategories = () => {

    }

    const handleResetProducts = () => {

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

export default ResetPassword;
