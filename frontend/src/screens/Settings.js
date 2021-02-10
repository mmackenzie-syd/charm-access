import React, { useReducer } from 'react';
import './Settings.css';
import {apiReducer, resetCategories, resetProducts} from "../api/authApi";


function Settings() {
    const [state, dispatch] = useReducer(apiReducer, {});

    const handleResetCategories = async () => {
        try {
            dispatch({type: 'REQUEST'})
            await resetCategories();
            dispatch({type: 'SUCCESS', payload: 'Successfully reset category' });
        } catch (error) {
            dispatch({type: 'FAIL', payload: `Category ${error}`});
        }
    }

    const handleResetProducts = async () => {
        try {
            dispatch({type: 'REQUEST'})
            await resetProducts();
            dispatch({type: 'SUCCESS', payload: 'Successfully reset products' });
        } catch (error) {
            dispatch({type: 'FAIL', payload: `Products ${error}`});
        }
    }

    const handleClose = () => {
        dispatch({type: 'RESET'});
    }

    return (
        <div className="reset-wrap">
                { state && state.data &&
                    <div className="api-message-box">
                        <span onClick={handleClose} className="api-message-box-close">&#10005;</span>
                        { state.data  }
                    </div>
                }
                { state && state.error &&
                    <div className="api-message-box api-message-box-red">
                        <span onClick={handleClose} className="api-message-box-close">&#10005;</span>
                        { state.error  }
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
    );
}

export default Settings;
