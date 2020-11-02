import './Collections.css';

function Collections() {
    return (
        <main className="collections margin-top-2 margin-bottom-1">
            <section className="margin-top-2">
                <ul className="collections__breadcrumb">
                    <li className="collections__breadcrumb-item">Home Page</li>
                    <li className="collections__breadcrumb-item">/</li>
                    <li className="collections__breadcrumb-item">Silver Earrings</li>
                </ul>
                <h2 className="collections__title margin-bottom-5">Silver Earrings</h2>
            </section>
            <section className="collections__grid">
                <div className="collections__grid-item">
                    <a href="/product/1">
                        <div className="collections__img">
                            <img src="../../images/products/1.jpg"/>
                        </div>
                        <div className="margin-top-2">
                            <div className="collections__description">Silver earrings studs "Triangle"</div>
                            <div className="margin-top-1 collections__price">$344.00</div>
                        </div>
                    </a>
                </div>
                <div className="collections__grid-item">
                    <a href="/product/1">
                        <div className="collections__img">
                            <img src="../../images/products/2.jpg"/>
                        </div>
                        <div className="margin-top-2">
                            <div className="collections__description">Silver earrings studs "Triangle"</div>
                            <div className="margin-top-1 collections__price">$344.00</div>
                        </div>
                    </a>
                </div>
                <div className="collections__grid-item">
                    <a href="/product/1">
                        <div className="collections__img">
                            <img src="../../images/products/3.jpg"/>
                        </div>
                        <div className="margin-top-2">
                            <div className="collections__description">Silver earrings studs "Triangle"</div>
                            <div className="margin-top-1 collections__price">$344.00</div>
                        </div>
                    </a>
                </div>
                <div className="collections__grid-item">
                    <a href="/product/1">
                        <div className="collections__img">
                            <img src="../../images/products/4.jpg"/>
                        </div>
                        <div className="margin-top-2">
                            <div className="collections__description">Silver earrings studs "Triangle"</div>
                            <div className="margin-top-1 collections__price">$344.00</div>
                        </div>
                    </a>
                </div>
                <div className="collections__grid-item">
                    <a href="/product/1">
                        <div className="collections__img">
                            <img src="../../images/products/5.jpg"/>
                        </div>
                        <div className="margin-top-2">
                            <div className="collections__description">Silver earrings studs "Triangle"</div>
                            <div className="margin-top-1 collections__price">$344.00</div>
                        </div>
                    </a>
                </div>
                <div className="collections__grid-item">
                    <a href="/product/1">
                        <div className="collections__img">
                            <img src="../../images/products/6.jpg"/>
                        </div>
                        <div className="margin-top-2">
                            <div className="collections__description">Silver earrings studs "Triangle"</div>
                            <div className="margin-top-1 collections__price">$344.00</div>
                        </div>
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Collections;
