import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './screens/Home';
import About from './screens/About';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Collections from "./screens/Collections";
import Shipping from "./screens/Shipping";
import Product from "./screens/Product";
import Cart from "./screens/Cart";

import {CategoriesProvider} from './providers/CategoriesProvider';

function App() {
    return (
        <BrowserRouter>
            <CategoriesProvider>
                <Header />
                <div className="wrap" >
                    <Route path="/" component={Home} exact />
                    <Route path="/product/:id" component={Product} />
                    <Route path="/collections/:category/:page" component={Collections} />
                    <Route path="/about" component={About} />
                    <Route path="/shipping" component={Shipping} />
                    <Route path="/cart" component={Cart} />
                </div>
                <Footer />
            </CategoriesProvider>
        </BrowserRouter>
    );
}

export default App;
