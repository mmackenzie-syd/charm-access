// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
// https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2

import React, {useEffect} from 'react';
import { withRouter } from "react-router";

function ScrollToTop(props) {
    const { children, location } = props;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    return children;
}

export default withRouter(ScrollToTop)
