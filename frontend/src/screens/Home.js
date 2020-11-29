import './Home.css';
import React, {useEffect} from 'react';
import ImageGallery from 'react-image-gallery';
import { useHistory } from "react-router";
import PhoneIcon from "../icons/PhoneIcon";
import KangarooIcon from "../icons/KangarooIcon";
import Slider from "../components/Slider";
import CategoriesSlide from "../components/CategoriesSlide";
import ArrivalsSlide from "../components/ArrivalsSlide";
import {useDispatch, useSelector} from "react-redux";
import {getArrivals, getByCategory} from "../state/apiActions";

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
    const dispatch = useDispatch();

    const bycategoryApi = useSelector(state => state.bycategoryApi);
    const { loading: isLoadingBycategory, errorBycategory, data: bycategory } = bycategoryApi;
    const categoriesPerSlide = 3;

    useEffect(() => {
        dispatch(getByCategory());
    }, [dispatch]);

    const arrivalsApi = useSelector(state => state.arrivalsApi);
    const { loading: isLoadingArrivals, errorArrivals, data: arrivals } = arrivalsApi;
    const arrivalsPerSlide = 4;

    useEffect(() => {
        dispatch(getArrivals());
    }, [dispatch]);

    const handleShopNow = () => {
        history.push("/products/shop/1");
    }

  return (
      <main className="home">
          <section className="banner">
              <div className="image-bgd">
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
              </div>
            <div className="caption">
                <div className="brand-transp">
                    <img alt="brand" className="brand-transp-img" src="./images/brand_transp_purple.png"/>
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
               { bycategory &&
                    <Slider caption={'By Category'} items={bycategory} perSlide={categoriesPerSlide}
                       displayImage={CategoriesSlide}/>
               }
          </section>
          <section className="arrivals">
              {arrivals &&
                <Slider caption={'Recent Arrivals'} items={arrivals} perSlide={arrivalsPerSlide}
                      displayImage={ArrivalsSlide}/>
              }
          </section>

          <section className="info">
            <div className="info__img-container">
                <img alt="mood" className="info__img" src="./images/banners_for_site_1_1080x.jpg"/>
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
