import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
//
import './Carousel.css';
import './Base.css';
import './Layout.css';
//
import Home from './screens/Home';
import About from './screens/About';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./screens/Products";
import Shipping from "./screens/Shipping";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import {getCategoriesState} from "./state/apiActions";
import {useDispatch} from "react-redux";
import {ModalProvider} from "./context/modalContext";
import ScrollToTop from "./components/ScrollToTop";
import EditProducts from "./screens/EditProducts";
import EditCategories from "./screens/EditCategories";
import EditProduct from "./screens/EditProduct";
import ProtectedRoute from "./ProtectedRoute";
import ResetPassword from "./screens/ResetPassword";
import SearchScrn from "./screens/SearchScrn";
import Settings from "./screens/Settings";

function App() {
    // preload
    const dispatch = useDispatch();
    dispatch(getCategoriesState());
    return (
        <BrowserRouter>
            <ScrollToTop>
                <ModalProvider>
                    <Header />
                    <div className="spacer-header-compensate">&nbsp;</div>
                    <div className="wrap" >
                        <Route path="/" component={Home} exact />
                        <Route path="/product/:category/:name" component={Product}/>
                        <Route path="/products/:category/:page" exact component={Products} />
                        <Route path="/search" component={SearchScrn} />
                        <Route path="/about" component={About} />
                        <Route path="/shipping" component={Shipping} />
                        <Route path="/cart" component={Cart} />

                        {/* Protected routes */}
                        <ProtectedRoute
                            path="/dashboard/products/:page"
                            component={EditProducts}
                        />
                        <ProtectedRoute
                            path="/dashboard/product/:id"
                            component={EditProduct}
                        />
                        <ProtectedRoute
                            path="/dashboard/createproduct"
                            component={EditProduct}
                        />
                        <ProtectedRoute
                            path="/dashboard/categories"
                            component={EditCategories}
                        />
                        <ProtectedRoute
                            path="/dashboard/settings"
                            component={Settings}
                        />
                        <ProtectedRoute
                            path="/dashboard/reset"
                            component={ResetPassword}
                        />
                    </div>
                    <Footer />
                </ModalProvider>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;

