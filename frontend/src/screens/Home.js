import './Home.css';
import React from 'react';
import {Link} from "react-router-dom";

import ImageGallery from 'react-image-gallery';

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
  return (
      <main className="home">
          <section className="banner">
            <div className="caption">
                <h1 className="charm">charm</h1>
                <p className="accessories">FASHION & ACCESSORIES</p>
                <hr />
                <p>An introductory verse to explain your products and services.
                    Niche is a minimalist shop design with a focus on product images.
                    Simple with no distractions.
                </p>
                <div className="btn-primary"><Link to="">GO SHOP</Link></div>
            </div>
          </section>

          <section className="category">
              <h3>By Category</h3>
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
              <h3>Recent Arrivals</h3>
              <div className="spacer">&nbsp;</div>
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

      </main>
    );
}

export default Home;
