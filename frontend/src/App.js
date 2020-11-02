import React, { Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './screens/Home';
import About from './screens/About';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Collections from "./screens/Collections";
import Shipping from "./screens/Shipping";
import Product from "./screens/Product";
import Cart from "./screens/Cart";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Fragment>
                <Route path="/" component={Home} exact />
                <Route path="/product/:id" component={Product} />
                <Route path="/collections" component={Collections} exact />
                <Route path="/about" component={About} exact />
                <Route path="/shipping" component={Shipping} exact />
                <Route path="/cart" component={Cart} exact />
            </Fragment>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
