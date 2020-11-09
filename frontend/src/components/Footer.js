import React, { Fragment } from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer >
            <div className="row center footer__phone margin-bottom-2">
                    <span className="">
                        <svg version="1.1"
                             xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             x="0px"
                             y="0px"
                             width="18px"
                             height="18px"
                             style={{
                                 fill: '#4f4f4f',
                                 transform: 'translate(0, .1rem)'
                             }}
                             viewBox="0 0 512 512"
                             xmlSpace="preserve">
                        <g>
                            <path d="M288.4,460.8c0-8.5-3.4-16.2-9.4-22.2s-14.5-9.4-23-9.4c-8.5,0-16.2,3.4-22.2,9.4c-6,6-9.4,13.7-9.4,22.2
                                c0,8.5,3.4,16.2,9.4,22.2c6,6,13.7,9.4,22.2,9.4c8.5,0,16.2-3.4,22.2-9.4C284.2,477,288.4,469.3,288.4,460.8z M371.2,396.8V115.2
                                c0-3.4-0.9-6.8-3.4-9.4c-2.6-2.6-6-3.4-9.4-3.4H153.6c-3.4,0-6.8,0.9-9.4,3.4c-2.6,2.6-3.4,5.1-3.4,9.4v281.6
                                c0,3.4,0.9,6.8,3.4,9.4s6,3.4,9.4,3.4h204.8c3.4,0,6.8-0.9,9.4-3.4S371.2,400.2,371.2,396.8z M294.4,58c0-4.3-1.7-6.8-6.8-6.8h-64
                                c-4.3,0-6.8,2.6-6.8,6.8s2.6,6.8,6.8,6.8h64C292.7,64,294.4,61.4,294.4,58z M409.6,51.2v409.6c0,13.7-5.1,25.6-15.4,35.8
                                C384,506.9,372.1,512,358.4,512H153.6c-13.7,0-25.6-5.1-35.8-15.4c-10.2-10.2-15.4-22.2-15.4-35.8V51.2c0-13.7,5.1-25.6,15.4-35.8
                                C128,5.1,139.9,0,153.6,0h204.8c13.7,0,25.6,5.1,35.8,15.4C404.5,25.6,409.6,37.5,409.6,51.2z"/>
                        </g>
                        </svg>
                    </span>
                &nbsp;+061421013777 &nbsp;&nbsp; 10AM - 8PM
            </div>
            <div className="row center">&copy; 2020 Charm Accessories &#8729; Built by Mark Mackenzie</div>
        </footer>
    );
}

export default Footer;
