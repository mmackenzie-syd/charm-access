import './Home.css';
import React from 'react';
import {Link} from "react-router-dom";

import ImageGallery from 'react-image-gallery';
import {useHistory} from "react-router";
import PhoneIcon from "../icons/PhoneIcon";
import KangarooIcon from "../icons/KangarooIcon";

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
                <div className="brand-transp">
                    <img className="brand-transp-img" src="./images/brand_transp_purple.png"/>
                </div>
                <div>
                    <p className="brand-p">Beautiful and charming fashion accessories at an affordable price.</p>

                </div>
                <div className="row center">
                    <button className="shop-now" onClick={handleShopNow}>Shop Now</button>
                </div>
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
                          <Link to="/collections/brooches/1">
                              <img  className="category__grid-img" src="./products/1_thb.jpg" />
                          </Link>
                      </div>
                      <h2>Brooches&nbsp;<mark>(11)</mark></h2>
                  </li>
                  <li className="category__grid-item">
                      <div className="category__grid-img-container">
                          <Link to="/collections/bracelets/1">
                              <img  className="category__grid-img" src="./products/34_thb.jpg" />
                          </Link>
                      </div>
                      <h2>Bracelets&nbsp;<mark>(7)</mark></h2>
                  </li>
                  <li className="category__grid-item">
                      <div className="category__grid-img-container">
                          <Link to="/collections/earrings/1">
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
                    <PhoneIcon width={'2.8rem'} height={'2.8rem'}  fill={'#fff'} />
                    &nbsp;+061421013777 &nbsp;&nbsp; 10AM - 8PM
                </div>
                <div className="row center info__shipping">
                    <KangarooIcon width={'4.2rem'} height={'4.2rem'} fill={'#fff'} className={'info__kangaroo'}/>
                    Australia Post Delivery Rates Apply
                </div>
            </div>
          </section>

      </main>
    );
}

export default Home;
