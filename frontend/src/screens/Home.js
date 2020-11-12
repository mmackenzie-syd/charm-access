import './Home.css';
import React from 'react';
import { Link } from "react-router-dom";

import ImageGallery from 'react-image-gallery';
import { useHistory } from "react-router";
import PhoneIcon from "../icons/PhoneIcon";
import KangarooIcon from "../icons/KangarooIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import Categories from "../components/Categories";
import Arrivals from "../components/Arrivals";

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

          <Categories />
          <Arrivals />
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
                <div className="row center info__shipping margin-bottom-5">
                    <KangarooIcon width={'4.2rem'} height={'4.2rem'} fill={'#fff'} className={'info__kangaroo'}/>
                    Australia Post Delivery Rates Apply
                </div>

            </div>
          </section>

          <section className="info__signup-wrap">
              <div className="row center">
                <div className="col-6 footer__col footer__sign-up">
                  <form id="footersignupform" className="s-form form--footer">
                      <p className=" footer__heading u-bold u-uppercase">Become a vip</p>
                      <p className="u-semi-bold">Be the first to know about special offers and&nbsp;updates.</p>

                      <input type="hidden" id="csrftoken" name="csrftoken"
                             value="jHECa7neQMKbSudI6xZ16366o54gryO2lI5mBUpzLmM=" />
                      <div className="s-input-wrap">
                          <div className="s-input" data-label="Email">
                              <input type="email" id="footersignupemail" placeholder="Enter your email address" />
                          </div>

                          <button id="footersignupbutton" className="s-button s-button--primary">Sign Up</button>
                      </div>
                      <div id="footer-error-wrapper" className="is-hidden"></div>
                  </form>
                  <div className="clear"></div>
              </div>
              </div>
          </section>
          <div className="spacer"></div>
      </main>
    );
}

export default Home;
