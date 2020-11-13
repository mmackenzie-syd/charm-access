import './Home.css';
import React from 'react';
import { Link } from "react-router-dom";

import ImageGallery from 'react-image-gallery';
import { useHistory } from "react-router";
import PhoneIcon from "../icons/PhoneIcon";
import KangarooIcon from "../icons/KangarooIcon";
import Slider from "../components/Slider";
import CategoriesSlide from "../components/CategoriesSlide";
import ArrivalsSlide from "../components/ArrivalsSlide";

const categoriesData = [
    {
        id: 1,
        name: 'Brooches',
        qty: 11,
        image: './products/1_thb.jpg'
    },
    {
        id: 2,
        name: 'Bracelets',
        qty: 7,
        image: './products/2_thb.jpg'
    },
    {
        id: 3,
        name: 'Earrings',
        qty: 5,
        image: './products/3_thb.jpg'
    },
    {
        id: 4,
        name: 'Necklaces',
        qty: 11,
        image: './products/1_thb.jpg'
    },
    {
        id: 5,
        name: 'Rings',
        qty: 7,
        image: './products/2_thb.jpg'
    }
];

const arrivalsData = [
    {
        _id: '1',
        name: 'Rose Bouquet Brooch',
        category: 'brooches',
        image: '/products/1.jpg',
        thumbnail: '/products/1_thb.jpg',
        price: 120,
    },
    {
        _id: '2',
        name: 'Rose Butterfly Brooch',
        category: 'brooches',
        image: '/products/2.jpg',
        thumbnail: '/products/2_thb.jpg',
        price: 120,
    },
    {
        _id: '3',
        name: 'Single Rose Brooch',
        category: 'brooches',
        image: '/products/3.jpg',
        thumbnail: '/products/3_thb.jpg',
        price: 120,
    },
    {
        _id: '4',
        name: 'White Butterfly Brooch',
        category: 'brooches',
        image: '/products/4.jpg',
        thumbnail: '/products/4_thb.jpg',
        price: 120,
    },
    {
        _id: '5',
        name: 'Elephant Brooch',
        category: 'brooches',
        image: '/products/5.jpg',
        thumbnail: '/products/5_thb.jpg',
        price: 120,
    },
    {
        _id: '6',
        name: 'Blue Topaz Butterfly Brooch',
        category: 'brooches',
        image: '/products/6.jpg',
        thumbnail: '/products/6_thb.jpg',
        price: 120,
    },
    {
        _id: '7',
        name: 'Puppy Dog Brooch',
        category: 'brooches',
        image: '/products/7.jpg',
        thumbnail: '/products/7_thb.jpg',
        price: 120,
    },
    {
        _id: '8',
        name: 'Lilly Flower  Brooch',
        category: 'brooches',
        image: '/products/8.jpg',
        thumbnail: '/products/8_thb.jpg',
        price: 120,
    },
    {
        _id: '9',
        name: 'Rose Bouquet Brooch',
        category: 'brooches',
        image: '/products/1.jpg',
        thumbnail: '/products/1_thb.jpg',
        price: 120,
    },
    {
        _id: '10',
        name: 'Rose Butterfly Brooch',
        category: 'brooches',
        image: '/products/2.jpg',
        thumbnail: '/products/2_thb.jpg',
        price: 120,
    },
    {
        _id: '11',
        name: 'Single Rose Brooch',
        category: 'brooches',
        image: '/products/3.jpg',
        thumbnail: '/products/3_thb.jpg',
        price: 120,
    },
    {
        _id: '12',
        name: 'White Butterfly Brooch',
        category: 'brooches',
        image: '/products/4.jpg',
        thumbnail: '/products/4_thb.jpg',
        price: 120,
    },
];

const arrivalsPerSlide = 4;

const categoriesPerSlide = 3;

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
               <Slider caption={'By Category'} items={categoriesData} perSlide={categoriesPerSlide} displayImage={CategoriesSlide}/>
           </section>
          <section className="arrivals">
              <Slider caption={'Recent Arrivals'} items={arrivalsData} perSlide={arrivalsPerSlide} displayImage={ArrivalsSlide}/>
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
