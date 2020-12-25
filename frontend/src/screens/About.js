import Breadcrumb from "../components/Breadcrumb";
import React from "react";

function About() {
    return (
        <main className="product margin-top-5 margin-bottom-5" style={{minHeight: '500px'}}>
                <section className="row top">
                    <div className="col-6">
                        <img alt="Sydney" className="product-img" src={`${process.env.PUBLIC_URL}/images/sydney.jpg`}/>
                    </div>
                    <div className="col-6 padding-left-3">
                        <div className="margin-bottom-1">
                            <Breadcrumb
                                list={[{name: 'Home Page', url: '/'}, {name: 'About Us', url: ''}]}
                                show={true}
                            />
                        </div>
                        <h3 className="margin-bottom-1">About Us</h3>
                        <h3 className="product-brand-title  margin-bottom-2">Charm Accessories</h3>
                        <p className="product-description margin-top-4">Located in the beautiful harbour city of Sydney,
                            Charm Accessories online store offers minimalist fashion jewelry and jewelry at affordable prices,
                            shipping Australia wide. We do not just sell jewelry, we create an image and mood.</p>
                        <p className="product-description">Everything around us is changing rapidly, especially fashion trends.
                            Earlier, decorations emphasized their status, importance in society. Today, jewelry or accessories
                            for a person are primarily an element of mood, a way to complement an image. Therefore, a modern
                            woman tends to choose original, classic or minimalist accessories and jewelry, often change them
                            depending on the mood, time of day, season, and we are always ready to help with this.</p>
                        <p className="product-description">Fashion jewelry is both simple and sophisticated complementing the image
                            harmoniously, and a successful combination of jewelry, such as silver earrings and bracelets or a
                            pendant and a silver ring, you can easily create a new image, change your mood. There are also
                            interesting silver sets in the Charm Accessories online store.</p>
                        <div className="product__share-container">
                            <div className="product__share margin-bottom-2">Share this</div>
                            <div className="social-icons">
                                <div className="social-icons__img-wrap">
                                    <img alt="facebook" className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/facebook.png`} />
                                </div>
                                <div className="social-icons__img-wrap">
                                    <img alt="instagram" className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/instagram.png`} />
                                </div>
                                <div className="social-icons__img-wrap">
                                    <img alt="youtube" className="social-icons__img" src={`${process.env.PUBLIC_URL}/images/youtube.png`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </main>
    );
}

export default About;
