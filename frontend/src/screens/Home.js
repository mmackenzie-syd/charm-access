import './Home.css';
import React from 'react';
import {Link} from "react-router-dom";

function Home() {
  return (
      <main className="home margin-top-2 margin-bottom-1">
          <section className="grid-banner-container margin-top-5">
              <div className="grid-banner-1">
                  <img src="./images/banners_for_site_6_720x.jpg"/>
                  <ul className="banner__dots">
                      <li className="banner__dot"></li>
                      <li className="banner__dot"></li>
                      <li className="banner__dot"></li>
                      <li className="banner__dot"></li>
                      <li className="banner__dot"></li>
                  </ul>
              </div>
              <div className="grid-banner-2">
                  <div className="brand-transp">
                      <img src="./images/brand_transp.png"/>
                  </div>
                  <div className="row center">
                      <button className="shop-now">Shop Now</button>
                  </div>
              </div>
          </section>
          <section className="margin-top-5">
              <div className="arrivals">New Arrivals</div>
              <div className="collections__grid margin-top-5">
                  <div className="collections__grid-item">
                      <div className="collections__img">
                          <img src="./images/1.jpg" />
                      </div>
                  </div>
                  <div className="collections__grid-item">
                      <div className="collections__img">
                          <img src="./images/2.jpg" />
                      </div>
                  </div>
                  <div className="collections__grid-item">
                      <div className="collections__img">
                          <img src="./images/3.jpg" />
                      </div>
                  </div>
                  <div className="collections__grid-item">
                      <div className="collections__img">
                          <img src="./images/4.jpg" />
                      </div>
                  </div>
                  <div className="collections__grid-item">
                      <div className="collections__img">
                          <img src="./images/5.jpg" />
                      </div>
                  </div>
                  <div className="collections__grid-item">
                      <div className="collections__img">
                          <img src="./images/6.jpg" />
                      </div>
                  </div>
              </div>
          </section>
          <section className="margin-top-5 info">
              <div className="margin-bottom-5 info__title">Useful information</div>
              <div className="margin-bottom-3">Everything we have, what we have, we need to take care of.
                  Heed our jewelry care tips to make them shine and delight you even more.
              </div>
              <button className="btn-primary info__btn">Jewelry Care</button>
          </section>
          <section className="margin-top-4 mood">
              <img className="mood__img" src="./images/banners_for_site_1_1080x.jpg"/>
                  <div className="mood__caption">
                      <div>Create your mood with Charm Accessories</div>
                      <div className="margin-top-3 mood_contact">
                          <svg className="icon white" width="42" height="42" viewBox="0 0 26 26" version="1.1"
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
                          <span className="mood__phone">+060931200777</span>
                      </div>
                  </div>
          </section>
          <form className="signup margin-top-4">
              <div className="margin-bottom-3 signup__title">Sign up to our newsletter</div>
              <div className="margin-bottom-3">Promotions, new arrivals, discounts.</div>
              <div className="row signup__input-wrap">
                  <svg className="icon" width="26" height="26" viewBox="0 -3 26 23" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g strokeWidth="2">
                          <path d="M0,0 L25,0 L25,17 L0,17 L0,0 Z M2,2 L2,15 L23,15 L23,2 L2,2 Z"></path>
                          <path
                              d="M13.0131231,8.89168498 L11.9868769,8.89168498 L12.5,8.5849266 L13.0131231,8.89168498 Z M23.4868769,2.01668498 L24.5131231,3.73331502 L12.5,10.9150734 L0.48687689,3.73331502 L1.51312311,2.01668498 L12.5,8.5849266 L23.4868769,2.01668498 Z"></path>
                      </g>
                  </svg>
                  <input className="signup__input" type="email" id="email" name="email" value="Your e-mail address"/>
                      <button className="btn-primary signup__submit" type="submit">Send Message</button>
              </div>
          </form>
      </main>
    );
}

export default Home;
