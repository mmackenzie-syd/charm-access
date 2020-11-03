import './Home.css';
import React from 'react';

function Home() {
  return (
      <main>
          <section className="grid-banner-container margin-top-2">
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
              </div>
          </section>
          <section className="margin-top-3">
              <h3 className="margin-bottom-3">Collections</h3>
              <div className="grid-container">
                  <div className="grid-item">
                      <img src="./images/brooch.jpg" />
                  </div>
                  <div className="grid-item">
                      <img src="./images/bracelet.jpg" />
                  </div>
                  <div className="grid-item">
                      <img src="./images/earrings.jpg" />
                  </div>
                  <div className="grid-item">
                      <img src="./images/necklace.jpg" />
                  </div>
              </div>
          </section>
          <section className="margin-top-4 info">
              <div className="margin-bottom-3">Useful information</div>
              <div className="text-small margin-bottom-3">Everything we have, what we have, we need to take care of.
                  Heed our jewelry care tips to make them shine and delight you even more.
              </div>
              <button className="btn-primary">Jewelry Care Blog</button>
          </section>
          <section className="margin-top-4 mood">
              <img src="./images/banners_for_site_1_1080x.jpg"/>
                  <div className="mood__caption">
                      <h2>Create your mood with Charm Accessories</h2>
                  </div>
          </section>
          <form className="signup margin-top-4">
              <div className="margin-bottom-3">Sign up to our newsletter</div>
              <div className="text-small margin-bottom-1">Promotions, new arrivals, discounts.</div>
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
          <section className="margin-top-4">
              <div className="testimonial">
                  <h3 className="margin-top-5 margin-bottom-3">Testimonials</h3>
                  <div className="testiminial__text">
                      <p>Magic! I chose Charm Accessories for all my jewellery for my engagement party.
                          Katie, owner, was simply amazing, taking special care to ensure a fit and match for all of my
                          outfits.
                          The jewellery designs are unique, delicate and striking, not to mention the quality - just
                          gorgeous. I'm so glad I found her!
                          <p>My silver shell earrings and matching necklace are my favourite sets ever. I had so many
                              compliments when wearing them. I just love it!</p>
                          I will definitely be shopping here again for both myself and my friends - beautiful quality,
                          great service.
                      </p>
                      <p>Thank you Katie for providing such beautiful jewellery for me to wear on a very special day
                          ...xoxo </p>

                  </div>
                  <div className="testimonial__signature margin-top-4">
                      <p>Molly & Richard</p>
                      <p>Revesby, NSW</p>
                  </div>
              </div>
          </section>
      </main>
    );
}

export default Home;
