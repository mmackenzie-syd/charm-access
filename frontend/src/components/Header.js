import './Header.css';

function Header() {
    return (
        <header>
            <div className="row top site-title margin-top-2">
                <div className="col-4 margin-top-3">
                    <svg className="icon" width="24" height="24" viewBox="0 0 26 26" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g strokeWidth="1">
                            <path
                                d="M3.5,2 C2.67157288,2 2,2.67157288 2,3.5 L2,22.5 C2,23.3284271 2.67157288,24 3.5,24 L11.5,24 C12.3284271,24 13,23.3284271 13,22.5 L13,3.5 C13,2.67157288 12.3284271,2 11.5,2 L3.5,2 Z M3.5,0 L11.5,0 C13.4329966,0 15,1.56700338 15,3.5 L15,22.5 C15,24.4329966 13.4329966,26 11.5,26 L3.5,26 C1.56700338,26 0,24.4329966 0,22.5 L0,3.5 C0,1.56700338 1.56700338,0 3.5,0 Z"></path>
                            <polygon points="14.59375 4 14.59375 6 0.402816772 6 0.402816772 4"></polygon>
                            <polygon points="14.59375 17 14.59375 19 0.402816772 19 0.402816772 17"></polygon>
                            <path
                                d="M8.5,20 C9.05228475,20 9.5,20.4477153 9.5,21 C9.5,21.5522847 9.05228475,22 8.5,22 L6.5,22 C5.94771525,22 5.5,21.5522847 5.5,21 C5.5,20.4477153 5.94771525,20 6.5,20 L8.5,20 Z"></path>
                        </g>
                    </svg>
                    <span className="site-title__phone">+380931200324</span>
                </div>
                <div className="col-4">
                    <a href="/">
                        <div className="site-title__brand">
                            <img src="../../images/brand.png"/>
                        </div>
                    </a>
                </div>
                <div className="col-4 row right margin-top-3">
                    <svg className="icon margin-left-1" width="24" height="24" viewBox="-3 -3 23 23" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g strokeWidth="2">
                            <polygon
                                points="18.7071068 17.2928932 17.2928932 18.7071068 12.7628932 14.1771068 14.1771068 12.7628932"></polygon>
                            <path
                                d="M8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 Z M8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z"></path>
                        </g>
                    </svg>
                    <a href="/cart">
                        <svg className="icon margin-left-1" width="24" height="24" viewBox="-3 -1 23 25" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g strokeWidth="2">
                                <path
                                    d="M10.5882353,8 L10.5882353,4.08823529 C10.5882353,2.93493479 9.65330051,2 8.5,2 C7.34669949,2 6.41176471,2.93493479 6.41176471,4.08823529 L6.41176471,8 L2,8 L2,20 L15,20 L15,8 L10.5882353,8 Z M4.41176471,4.08823529 C4.41176471,1.83036529 6.24212999,0 8.5,0 C10.75787,0 12.5882353,1.83036529 12.5882353,4.08823529 L12.5882353,6 L17,6 L17,22 L0,22 L0,6 L4.41176471,6 L4.41176471,4.08823529 Z M5.41176471,6 L4.41176471,7 L4.41176471,6 L5.41176471,6 Z"></path>
                                <polygon points="4 8 4 6 13 6 13 8"></polygon>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <nav className="site-nav margin-top-2">
                <ul className="row center">
                    <li className="dropdown">
                        <button className="dropbtn">Jewellery</button>
                        <div className="dropdown-content">
                            <a href="/collections">Necklaces</a>
                            <a href="/collections">Bracelets</a>
                            <a href="/collections">Rings</a>
                            <a href="/collections">Earrings</a>
                            <a href="/collections">Brooches</a>
                            <a href="/collections">Headware</a>
                        </div>
                    </li>
                    <li><a href="/collections">New Arrivals</a></li>
                    <li><a href="/collections">Sale</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/shipping">Shipping & Payment</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
