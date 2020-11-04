import React from 'react';
import './Loading.css';
import loading from './loading.gif';

function Loading() {
    return (
        <div className="loading-wrap">
            <img src={loading} className="loading-img"/>
        </div>
    );
}

export default Loading;
