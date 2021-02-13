import React, {useEffect, useRef, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import './Home.css';
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
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import {Link} from "react-router-dom";
import {setProductsNew} from "../state/nonApiActions";

const images = [
    {
        original: './images/banner1.jpg',
      //  thumbnail: './images/banner1.jpg',
    },
    {
        original: './images/banner2.jpg',
      //  thumbnail: './images/banner2.jpg',
    },
    {
        original: './images/banner3.jpg',
       // thumbnail: './images/banner3.jpg',
    },
];

const imagesMobile = [
    {
        original: './images/banner1-mobile.jpg',
      //  thumbnail: './images/banner1-mobile.jpg',
    },
    {
        original: './images/banner2-mobile.jpg',
      //  thumbnail: './images/banner2-mobile.jpg',
    },
    {
        original: './images/banner3-mobile.jpg',
      //  thumbnail: './images/banner3-mobile.jpg',
    },
];

function Home() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [width, setWidth] = useState(1000);
    const [emailFrom, setEmailFrom] = useState('');
    const widthRef = useRef(null);
    const categorySlidesApi = useSelector(state => state.categorySlidesApi);
    const { data: categorySlides } = categorySlidesApi;

    const arrivalSlidesApi = useSelector(state => state.arrivalSlidesApi)
    const { data: arrivalSlides } = arrivalSlidesApi;

    const [categoriesIndex, setCategoriesIndex] = useState(0);
    const [arrivalsIndex, setArrivalsIndex] = useState(0);

    const categoriesPerSlide = 3;
    const arrivalsPerSlide = 4;
    const maxArrivalsIndex = arrivalSlides ? arrivalSlides.length / arrivalsPerSlide - 1 : 1;
    const maxCategoriesIndex = categorySlides? Math.ceil(categorySlides.length / categoriesPerSlide) - 1 : 1;
    let handleArrivalsEvent;
    let handleCategoryEvent;

    useEffect(() => {
        // detect window resize
        const handleWindowResize = () => {
            if(widthRef.current){
                setWidth(widthRef.current.offsetWidth);
            }
        }
        window.addEventListener("resize", handleWindowResize);
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect( () => {
        // get initial slide width
        if (widthRef.current){
            setWidth(widthRef.current.offsetWidth);
        }
    }, [widthRef]);

    useEffect(() => {
        dispatch(getCategorySlides());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getArrivalSlides());
    }, [dispatch]);

    const handleShopNow = () => {
        history.push("/products/shop/1");
    }

    const handleLeftArrivals = () => {
        if (arrivalsIndex > 0) {
            setArrivalsIndex(arrivalsIndex - 1);
            handleArrivalsEvent('LEFT_CLICK');
        }
    }

    const handleRightArrivals = () => {
        if (arrivalsIndex < maxArrivalsIndex) {
            setArrivalsIndex(arrivalsIndex + 1);
            handleArrivalsEvent('RIGHT_CLICK');
        }
    }

    const handleLeftCategory = () => {
        if (categoriesIndex > 0) {
            setCategoriesIndex(categoriesIndex - 1);
            handleCategoryEvent('LEFT_CLICK');
        }
    }

    const handleRightCategory = () => {
        if (categoriesIndex < maxCategoriesIndex) {
            setCategoriesIndex(categoriesIndex + 1);
            handleCategoryEvent('RIGHT_CLICK');
        }
    }


    const submitHandler = (e) => {
        e.preventDefault();
        window.location.href=`mailto:test@gmail.com?subject=Please sign me up&body=${emailFrom}`;
    }

    const handleArrivalsNav = (index) => {
        // used for mobile layout
        const name = arrivalSlides[index].name;
        setProductsNew(arrivalSlides, dispatch);
        history.push(`/product/new/${name}`)
    }

    return (
      <main className="home margin-top-3">
          <section className="banner margin-top-3 full-width banner-mobile">
              <ImageGallery
                  items={imagesMobile}
                  showNav={false}
                  showThumbnails={false}
                  showFullscreenButton={false}
                  showBullets={false}
                  autoPlay={true}
                  showPlayButton={false}
                  slideInterval={7000}
              />
            <div className="banner-caption">
                <div className="">
                    <p className="banner-caption-txt">Beautiful and charming fashion accessories at an affordable price.</p>
                </div>
                <div className="row center banner-caption-button-wrap">
                    <button className="btn btn-primary btn-mobile" onClick={handleShopNow}>Shop Now</button>
                </div>
            </div>
          </section>
          <section className="banner margin-top-3 full-width banner-desktop" id="banner">
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
                  <div className="">
                      <p className="banner-caption-txt">Beautiful and charming fashion accessories at an affordable price.</p>
                  </div>
                  <div className="row center banner-caption-button-wrap">
                      <button className="btn btn-primary" onClick={handleShopNow}>Shop Now</button>
                  </div>
              </div>
          </section>

          <section className="arrivals margin-top-2 arrivals-mobile">
                  <h3 className="margin-bottom-2">New Arrivals</h3>
                  {  arrivalSlides &&
                      <ul className="mobile-list margin-bottom-1">
                          {
                              arrivalSlides.map(({name, _id, thumbnail, price}, index) => {
                                  return (
                                      <li key={_id} className="mobile-list-item margin-bottom-1">
                                          <div className="slide-img-wrap" onClick={() => handleArrivalsNav(index)}>
                                              <img  alt={name} className="img-dull" src={thumbnail} />
                                          </div>
                                          <div className="row bottom margin-bottom-2">
                                              <div>
                                                  <p className="slide-caption">{name}</p>
                                                  <h5>${price.toFixed(2)}</h5>
                                              </div>
                                          </div>
                                      </li>
                                  );
                              })
                          }
                      </ul>
                  }
          </section>

          <section className="arrivals arrivals-desktop" ref={widthRef}>
              <div className="row  margin-bottom-1">
                  <h3 className="margin-bottom-2">New Arrivals</h3>
                  <div>
                      <button
                          className={(arrivalsIndex === 0) ? 'btn btn-icon btn-secondary btn-disabled' : 'btn btn-icon btn-secondary'}
                          onClick={handleLeftArrivals}>
                          <LeftArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                      </button>
                      <button
                          className={(arrivalsIndex === maxArrivalsIndex) ? 'btn btn-icon btn-secondary btn-disabled' : 'btn btn-icon btn-secondary'}
                          onClick={handleRightArrivals}>
                          <RightArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                      </button>
                  </div>
              </div>
              <div className="arrivals-relative">
                  <ArrivalsSlideDummy />
                  {  arrivalSlides &&
                  <div className="arrivals-absolute">
                      <Slider
                          items={arrivalSlides}
                          perSlide={arrivalsPerSlide}
                          displayImage={ArrivalsSlide}
                          width={width}
                          setHandleEvent={instance => handleArrivalsEvent = instance}
                      />
                  </div>
                  }
              </div>
          </section>
          <section className="category home-mobile category-mobile">
              <h3 className="margin-bottom-3">Shop By Category</h3>
                  {  categorySlides &&
                      <ul className="mobile-list margin-bottom-3" >
                          {
                              categorySlides.map(({ product, category, count }) => {
                                  const { _id, image } = product;
                                  const { name, slug } = category;
                                  return (
                                      <li key={_id} className="mobile-list-item margin-bottom-1">
                                          <div className="slide-img-wrap">
                                              <Link to={`/products/${slug}/1`}>
                                                  <img alt={name} className="img-dull" src={image}/>
                                              </Link>
                                          </div>
                                          <p className="slide-caption">{name}&nbsp;
                                              <mark>({ count })</mark>
                                          </p>
                                      </li>);
                              })
                          }
                      </ul>
                  }
          </section>

          <section className="category category-desktop">
              <div className="row  margin-bottom-1">
                  <h3 className="margin-bottom-2">Shop By Category</h3>
                  <div>
                      <button
                          className={(categoriesIndex === 0) ? 'btn btn-icon btn-secondary btn-disabled' : 'btn btn-icon btn-secondary'}
                          onClick={handleLeftCategory}>
                          <LeftArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                      </button>
                      <button
                          className={(categoriesIndex === maxCategoriesIndex) ? 'btn btn-icon btn-secondary btn-disabled' : 'btn btn-icon btn-secondary'}
                          onClick={handleRightCategory}>
                          <RightArrowIcon width={'1.2rem'} height={'1.2rem'} offset={'.3rem'}/>
                      </button>
                  </div>
              </div>
              <div className="category-relative">
                  <CategorySlideDummy />
                  {  categorySlides &&
                      <div className="category-absolute">
                          <Slider
                              items={categorySlides}
                              perSlide={categoriesPerSlide}
                              displayImage={CategoriesSlide}
                              width={width}
                              setHandleEvent={instance => handleCategoryEvent = instance}
                          />
                      </div>
                  }
              </div>
          </section>

          <section className="mood mood-mobile">
            <div>
                <img alt="mood" className="mood-img" src="./images/mood-mobile.jpg"/>
            </div>
            <div className="mood-caption">
                <div className="mood-caption-title">
                    Create your mood with Charm Accessories
                </div>
                <div className="mood-caption-contact row center">
                    <PhoneIcon
                        width={'1.8rem'}
                        height={'1.8rem'}
                        offset={'.25rem'}
                        fill={'#fff'}
                    />
                    &nbsp;+061421013777 : 10AM - 8PM
                </div>
                <div className="mood-caption-shipping">
                    <KangarooIcon
                        width={'2.8rem'}
                        height={'1.7rem'}
                        offset={'.3rem'}
                        fill={'#fff'}
                        className={'kangaroo'}
                    />
                    Australia Post Deliver Rates Apply
                </div>
            </div>
          </section>
          <section className="mood mood-tablet">
              <div>
                  <img alt="mood" className="mood-img" src="./images/mood-mobile.jpg"/>
              </div>
              <div className="mood-caption">
                  <div className="mood-caption-title">
                      Create your mood with Charm Accessories
                  </div>
                  <div className="mood-caption-contact row center">
                      <PhoneIcon
                          width={'2.2rem'}
                          height={'2.2rem'}
                          offset={'.25rem'}
                          fill={'#fff'}
                      />
                      &nbsp;+061421013777 : 10AM - 8PM
                  </div>
                  <div className="mood-caption-shipping row center">
                    <span>
                    <KangarooIcon
                        width={'3.2rem'}
                        height={'2.2rem'}
                        offset={'.4rem'}
                        fill={'#fff'}
                        className={'kangaroo'}
                    />
                    </span>
                      <span>Australia Post Deliver Rates Apply</span>
                  </div>
              </div>
          </section>

          <section className="mood mood-desktop">
              <div>
                  <img alt="mood" className="mood-img" src="./images/mood.jpg"/>
              </div>
              <div className="mood-caption">
                  <div className="mood-caption-title">
                      Create your mood with Charm Accessories
                  </div>
                  <div className="mood-caption-contact row center">
                      <PhoneIcon
                          width={'2.8rem'}
                          height={'2.8rem'}
                          offset={'.25rem'}
                          fill={'#fff'}
                      />
                      &nbsp;+061421013777 : 10AM - 8PM
                  </div>
                  <div className="mood-caption-shipping row center">
                    <span>
                    <KangarooIcon
                        width={'4.4rem'}
                        height={'2.7rem'}
                        offset={'.4rem'}
                        fill={'#fff'}
                        className={'kangaroo'}
                    />
                    </span>
                      <span>Australia Post Deliver Rates Apply</span>
                  </div>
              </div>
          </section>

          <section className="signup row center">
              <form className="signup-form" onSubmit={submitHandler} encType="text/plain">
                  <h5 className="signup-title">BECOME A VIP</h5>
                  <p className="signup-paragraph">Be the first to know about special offers and&nbsp;updates.</p>
                  <div className="row">
                      <input
                          className="signup-email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          value={emailFrom}
                          onChange={e => setEmailFrom(e.target.value)}
                      />
                      <button type='submit' className="btn btn-primary btn-small signup-btn">SIGN UP</button>
                  </div>
              </form>
          </section>
          <div className="spacer"></div>
      </main>
    );
}

export default Home;
