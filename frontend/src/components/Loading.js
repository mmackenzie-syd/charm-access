// https://stackoverflow.com/questions/51602428/react-throttle-debounce-spinner-loading-message-not-show-if-request-is-fas

/* to do - move to react modal ?? */

import React, {Fragment, useEffect, useState} from 'react';
import './Loading.css';

function Loading(props) {
    const delay = props.delay ? props.delay : 1000;
    const isLoading = props.isLoading ? props.isLoading : false;
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        let timer;
        timer = setTimeout(
            () => setShowSpinner( true),
            delay
        );
        return () => clearTimeout(timer);
    }, [delay]);

    if (!showSpinner || !isLoading) {
        return <Fragment></Fragment>;
    }
    return (
        <div className="loading-wrap">
            <img alt="loading" className="loading-img" src={`${process.env.PUBLIC_URL}/images/loading.gif`} />
        </div>
    );
}

export default Loading;
