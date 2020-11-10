import './Home.css';
import React from 'react';
import {Link} from "react-router-dom";

import ImageGallery from 'react-image-gallery';
import {useHistory} from "react-router";

const images = [
    {
        original: './images/banner1.jpg',
        thumbnail: './images/banner1.jpg',
    },
    {
        original: './images/banner2.jpg',
        thumbnail: './images/banner2.jpg',
    },
    {
        original: './images/banner3.jpg',
        thumbnail: './images/banner3.jpg',
    },
];


function Home() {
    let history = useHistory();

    const handleShopNow = () => {
        history.push("/collections/shop/1");
    }

  return (
      <main className="home">
          <div className="row center free-shipping">
              <span>FREE SHIPPING AUSTRALIA WIDE ON ORDERS OVER $100</span>
          </div>
          <section className="banner">
              <ImageGallery
                  items={images}
                  showNav={false}
                  showThumbnails={false}
                  showFullscreenButton={false}
                  showBullets={true}
                  autoPlay={true}
                  showPlayButton={false}
                  slideInterval={7000}
              />
            <div className="caption">
                {/*
                <h1 className="">charm</h1>
                <p className="">FASHION & ACCESSORIES</p>
                <hr />
                <p>An introductory verse to explain your products and services.
                    Niche is a minimalist shop design with a focus on product images.
                    Simple with no distractions.
                </p>
                <div className="btn-primary"><Link to="">GO SHOP</Link></div>
                */}

                <div className="brand-transp">
                    <img className="brand-transp-img" src="./images/brand_transp_purple.png"/>
                </div>
                <div>
                    <p className="brand-p">Beautiful and charming fashion accessories at an affordable price.</p>

                </div>
                <div className="row center">
                    <button className="shop-now" onClick={handleShopNow}>Shop Now</button>
                </div>

                {/*
                <h1 className="charm">charm</h1>
                <p className="accessories">&nbsp;accessories</p>
                <p>An introductory verse to explain your products and services.
                    Niche is a minimalist shop design with a focus on product images.
                    Simple with no distractions.
                </p>
                <div className="row">
                    <button className="shop-now">SHOP NOW</button>
                </div> */}

            </div>
          </section>

          <section className="category">
              <div className="row  margin-bottom-1">
                  <h3>By Category</h3>
                  <div>
                      <span className="slider_control icon-arrow">
                          <svg
                              style={{
                                  fill: '#9192a3',
                                  transform: 'translate(0, .2rem)'
                              }}
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="1rem"
                              height="1rem"
                              x="0px"
                              y="0px"
                              viewBox="0 0 477.175 477.175"
                              xmlSpace="preserve">
                              <g>
                                  <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                                       c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                                  />
                              </g>
                          </svg>
                      </span>
                      <span className="slider_control icon-arrow">
                          <svg
                              style={{
                                  fill: '#9192a3',
                                  transform: 'translate(0, .2rem)'
                              }}
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="1rem"
                              height="1rem"
                              x="0px"
                              y="0px"
                              viewBox="0 0 477.175 477.175"
                              xmlSpace="preserve">
                              <g>
                                  <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                                      c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
                                  "/>
                              </g>
                          </svg>
                      </span>
                  </div>
              </div>
              <ul className="category__grid">
                  <li className="category__grid-item">
                      <div className="category__grid-img-container">
                          <Link to="">
                              <img  className="category__grid-img" src="./products/1_thb.jpg" />
                          </Link>
                      </div>
                      <h2>Brooches&nbsp;<mark>(11)</mark></h2>
                  </li>
                  <li className="category__grid-item">
                      <div className="category__grid-img-container">
                          <Link to="">
                              <img  className="category__grid-img" src="./products/34_thb.jpg" />
                          </Link>
                      </div>
                      <h2>Bracelets&nbsp;<mark>(7)</mark></h2>
                  </li>
                  <li className="category__grid-item">
                      <div className="category__grid-img-container">
                          <Link to="">
                              <img  className="category__grid-img" src="./products/29_thb.jpg" />
                          </Link>
                      </div>
                      <h2>Earrings&nbsp;<mark>(5)</mark></h2>
                  </li>
              </ul>
          </section>

          <section className="arrivals">
              <div className="row  margin-bottom-1">
                  <h3>Recent Arrivals</h3>
                  <div>
                      <span className="slider_control icon-arrow">
                          <svg
                              style={{
                                  fill: '#9192a3',
                                  transform: 'translate(0, .3rem)'
                              }}
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="1.2rem"
                              height="1.2rem"
                              x="0px"
                              y="0px"
                              viewBox="0 0 477.175 477.175"
                              xmlSpace="preserve">
                              <g>
                                  <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                                       c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                                  />
                              </g>
                          </svg>
                      </span>
                      <span className="slider_control icon-arrow">
                          <svg
                              style={{
                                  fill: '#9192a3',
                                  transform: 'translate(0, .3rem)'
                              }}
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="1.2rem"
                              height="1.2rem"
                              x="0px"
                              y="0px"
                              viewBox="0 0 477.175 477.175"
                              xmlSpace="preserve">
                              <g>
                                  <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                                      c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
                                  "/>
                              </g>
                          </svg>
                      </span>
                  </div>
              </div>

              {/*  <div className="spacer">&nbsp;</div> */}
              <ul className="arrivals__grid">
                  <li className="arrivals__grid-item">
                      <div className="arrivals__grid-img-container">
                          <Link to="">
                              <img  className="arrivals__grid-img" src="./products/3_thb.jpg" />
                          </Link>
                      </div>
                      <h2>Flying Ninja</h2>
                      <p className="price">$12.00</p>
                  </li>
                  <li className="arrivals__grid-item">
                      <div className="arrivals__grid-img-container">
                          <Link to="">
                              <img  className="arrivals__grid-img" src="./products/4_thb.jpg" />
                          </Link>
                      </div>
                      <h2>Happy Ninja</h2>
                      <p className="price">$18.00</p>
                  </li>
                  <li className="arrivals__grid-item">
                      <div className="arrivals__grid-img-container">
                          <Link to="">
                              <img  className="arrivals__grid-img" src="./products/5_thb.jpg" />
                          </Link>
                      </div>
                      <h2>Happy Ninja</h2>
                      <p className="price">$35.00</p>
                  </li>
                  <li className="arrivals__grid-item">
                      <div className="arrivals__grid-img-container">
                          <Link to="">
                              <img  className="arrivals__grid-img" src="./products/6_thb.jpg" />
                          </Link>
                      </div>
                      <h2>Ninja Silhouette</h2>
                      <p className="price">$20.00</p>
                  </li>
              </ul>
          </section>

          <section className="info">
            <div className="info__img-container">
                <img className="info__img" src="./images/banners_for_site_1_1080x.jpg"/>
            </div>
            <div className="info__caption">
                <div className="info__mood">
                    Create your mood with Charm Accessories
                </div>
                <div className="row center info__phone">
                    <span className="">
                        <svg version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="28px"
                            height="28px"
                            style={{fill: '#fff'}}
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
                <div className="row center info__shipping">
                    <span className="info__icon">
                        <svg version="1.0"
                             xmlns="http://www.w3.org/2000/svg"
                             width="42px"
                             height="42px"
                             viewBox="0 0 1280.000000 789.000000"
                             preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,789.000000) scale(0.100000,-0.100000)"
                               fill="#fff" stroke="none">
                            <path d="M6820 7884 c-14 -2 -59 -9 -100 -15 -426 -61 -897 -309 -1385 -728
                            -290 -249 -529 -495 -986 -1016 -305 -348 -828 -877 -1069 -1083 -642 -546
                            -1160 -837 -1654 -929 -136 -25 -391 -23 -521 5 -142 30 -215 55 -340 117
                            -310 153 -565 446 -732 840 l-34 80 5 -100 c12 -229 106 -457 290 -702 230
                            -307 606 -596 891 -686 388 -122 828 -90 1425 106 294 96 789 350 1778 914
                            227 129 416 233 420 231 5 -2 89 -88 188 -193 583 -617 548 -585 824 -768 182
                            -121 475 -300 575 -350 39 -19 106 -42 149 -51 44 -8 85 -21 92 -28 7 -7 20
                            -42 28 -78 37 -146 225 -560 320 -704 53 -80 95 -178 176 -406 68 -194 218
                            -673 320 -1020 109 -374 170 -525 242 -599 63 -64 69 -66 473 -120 165 -23
                            341 -50 390 -61 349 -76 1022 -194 1665 -291 117 -18 180 -34 330 -86 102 -36
                            243 -85 313 -109 205 -71 238 -69 253 14 11 66 26 79 106 92 56 10 87 10 140
                            0 68 -12 88 -9 88 13 0 14 -268 159 -393 211 -113 48 -138 52 -232 31 -97 -22
                            -130 -18 -325 39 -170 49 -844 259 -1255 391 -577 185 -676 215 -811 249 -169
                            41 -256 79 -319 137 -55 51 -80 96 -100 181 -52 227 -100 789 -126 1474 -14
                            387 -15 383 129 612 38 59 85 142 105 185 67 143 210 254 322 250 117 -3 386
                            -110 440 -175 24 -29 27 -38 22 -83 -3 -29 -37 -129 -81 -238 -42 -103 -83
                            -216 -91 -250 -7 -34 -21 -147 -30 -252 -27 -336 -51 -443 -107 -490 -26 -22
                            -39 -26 -67 -21 -39 6 -76 30 -103 67 -25 34 -48 133 -48 206 0 68 -11 84 -48
                            64 -48 -26 -71 -158 -41 -249 18 -56 55 -125 86 -162 56 -67 183 -96 287 -66
                            104 30 145 80 469 568 229 344 395 574 475 656 66 68 182 122 461 217 124 41
                            233 83 244 92 10 10 61 103 112 208 103 209 148 271 225 310 162 82 501 407
                            650 623 25 37 56 73 70 81 24 13 32 10 123 -34 156 -77 213 -74 366 19 l85 51
                            140 7 c78 4 181 16 230 26 l89 20 31 -34 c39 -42 83 -51 168 -34 124 24 168
                            65 168 157 0 127 -120 235 -534 483 -315 188 -326 195 -501 325 -185 137 -204
                            149 -282 171 -72 20 -82 16 -114 -47 -10 -21 -24 -41 -30 -44 -15 -10 -48 24
                            -137 135 -144 180 -374 400 -470 449 -40 21 -112 35 -226 46 -93 9 -148 27
                            -210 68 -88 58 -126 55 -126 -12 0 -46 26 -97 110 -216 145 -206 275 -299 460
                            -330 52 -9 118 -27 147 -40 57 -26 129 -87 156 -134 l18 -30 -43 -22 c-191
                            -95 -326 -179 -406 -252 -119 -109 -127 -112 -247 -110 -80 1 -125 8 -225 36
                            -337 94 -473 137 -492 153 -31 28 -179 208 -399 484 -107 135 -251 310 -319
                            390 -165 194 -485 512 -641 637 -350 280 -686 444 -1039 509 -82 14 -378 27
                            -430 18z"/>
                            </g>
                        </svg>
                    </span>
                    Australia Post Delivery Rates Apply
                </div>
            </div>
          </section>

      </main>
    );
}

export default Home;
