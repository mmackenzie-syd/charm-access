import React, {Fragment, useEffect} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './screens/Home';
import About from './screens/About';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Collections from "./screens/Collections";
import Shipping from "./screens/Shipping";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import {useDispatch, useSelector} from "react-redux";
import {listCategories} from "./actions/categoryActions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listCategories())
    }, []);
    return (
        <Fragment>
        <Header />
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={Product} />
            <Route path="/collections/:category" component={Collections} exact />
            <Route path="/about" component={About} exact />
            <Route path="/shipping" component={Shipping} exact />
            <Route path="/cart" component={Cart} exact />
        </BrowserRouter>
        <Footer />
        </Fragment>
    );
}

export default App;
