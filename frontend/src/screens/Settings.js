import React, { useReducer } from 'react';
import './Settings.css';
import {resetCategories, resetProducts} from "../api/authApi";

const  settingsReducer = (state, action) => {
    switch (action.type) {
        case 'REQUEST':
            return {...state, loading: true}
        case 'SUCCESS':
            return {...state, loading: false, success: true, error: false}
        case 'FAIL':
            return {...state, loading: false, error: true}
        case 'RESET':
            return {}
        default:
            return state;
    }
}

function Settings() {
    const [state, dispatch] = useReducer(settingsReducer, {});

    const handleResetCategories = async () => {
        try {
            dispatch({type: 'REQUEST'})
            await resetCategories();
            dispatch({type: 'SUCCESS'});
        } catch (error) {
            dispatch({type: 'FAIL'});
        }
    }

    const handleResetProducts = async () => {
        try {
            dispatch({type: 'REQUEST'})
            await resetProducts();
            dispatch({type: 'SUCCESS'});
        } catch (error) {
            dispatch({type: 'FAIL'});
        }
    }

    const handleClose = () => {
        dispatch({type: 'RESET'});
    }

    return (
        <>
            { state && state.success &&
                <div className="settings-message-box">
                    <span onClick={handleClose} className="settings-message-box-close">&#10005;</span>
                    System reset to default state
                </div>
            }
            { state && state.error &&
                <div className="settings-message-box settings-message-box-red">
                    <span onClick={handleClose} className="settings-message-box-close">&#10005;</span>
                    Failed to reset system to default state. Contact Administrator.
                </div>
            }
            <div className="reset-wrap">
                { state && state.loading &&
                    <div className="settings-loader-wrap">
                        <div className="settings-loader"></div>
                    </div>
                }
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
                </div>
            </div>
        </>
    );
}

export default Settings;
