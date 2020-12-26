import React, {useEffect, useRef, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import { useHistory } from "react-router";
import PhoneIcon from "../icons/PhoneIcon";
import KangarooIcon from "../icons/KangarooIcon";
import Slider from "../components/Slider";
import CategoriesSlide from "../components/CategoriesSlide";
import ArrivalsSlide from "../components/ArrivalsSlide";
import {useDispatch, useSelector} from "react-redux";
import {getArrivalSlides, getCategorySlides} from "../state/apiActions";
import ArrivalsSlideDummy from "../components/ArrivalsSlideDummy";
import CategorySlideDummy from "../components/CategorySlideDummy";

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
    const [width, setWidth] = useState(1000);
    const widthRef = useRef(null);

    const categorySlidesApi = useSelector(state => state.categorySlidesApi);
    const { data: categorySlides } = categorySlidesApi;
    const categoriesPerSlide = 3;

    console.log('categorySlides', categorySlides)

    useEffect( () => {
        // get initial slide width
        if (widthRef.current){
            setWidth(widthRef.current.offsetWidth);
        }
    }, [widthRef]);

    useEffect(() => {
        dispatch(getCategorySlides());
    }, [dispatch]);

    const arrivalSlidesApi = useSelector(state => state.arrivalSlidesApi);
    const { data: arrivalSlides } = arrivalSlidesApi;
    const arrivalsPerSlide = 4;

    useEffect(() => {
        dispatch(getArrivalSlides());
    }, [dispatch]);

    const handleShopNow = () => {
        history.push("/products/shop/1");
    }

  return (
      <main className="home">
          <section className="banner margin-top-3 margin-bottom-5 full-width">
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
            <div className="banner-caption">
                <div className="banner-caption-brand">
                    <img alt="brand" src="./images/brand_transp_purple.png"/>
                </div>
                <div>
                    <p className="banner-caption-txt">Beautiful and charming fashion accessories at an affordable price.</p>
                </div>
                <div className="row center margin-top-3">
                    <button className="btn btn-primary" onClick={handleShopNow}>Shop Now</button>
                </div>
            </div>
          </section>
          <section className="category category-relative">
              <CategorySlideDummy />
               { categorySlides &&
                   <div className="category-absolute">
                        <Slider caption={'By Category'} items={categorySlides} perSlide={categoriesPerSlide}
                            displayImage={CategoriesSlide} initialWidth={width}/>
                   </div>
               }
          </section>

          <section className="arrivals arrivals-relative" ref={widthRef}>
              <ArrivalsSlideDummy />
              {  arrivalSlides &&
                  <div className="arrivals-absolute">
                    <Slider caption={'Recent Arrivals'} items={arrivalSlides} perSlide={arrivalsPerSlide}
                        displayImage={ArrivalsSlide} initialWidth={width}/>
                  </div>
              }
          </section>

          <section className="mood margin-bottom-5">
            <div>
                <img alt="mood" className="mood-img" src="./images/mood.jpg"/>
            </div>
            <div className="mood-caption">
                <div className="mood-caption-title margin-bottom-4">
                    Create your mood with Charm Accessories
                </div>
                <div className="row center margin-bottom-3 padding-right-3">
                    <PhoneIcon width={'2.8rem'} height={'2.8rem'}  fill={'#fff'} />
                    &nbsp;+061421013777 &nbsp;&nbsp; 10AM - 8PM
                </div>
                <div className="row center padding-right-3 margin-bottom-5">
                    <KangarooIcon width={'4.2rem'} height={'4.2rem'} fill={'#fff'} className={'kangaroo'}/>
                    Australia Post Delivery Rates Apply
                </div>
            </div>
          </section>

          <section className="signup row center margin-bottom-5">
              <form className="col-8">
                  <h5 className="margin-bottom-2">BECOME A VIP</h5>
                  <p className="signup-paragraph margin-bottom-2">Be the first to know about special offers and&nbsp;updates.</p>
                  <div className="row">
                      <input
                          type="email"
                          placeholder="Enter your email address"
                          className="col-9"
                      />
                      <button className="btn btn-primary btn-small col-3 margin-left-1">SIGN UP</button>
                  </div>
              </form>
          </section>
          <div className="spacer"></div>
      </main>
    );
}

export default Home;
