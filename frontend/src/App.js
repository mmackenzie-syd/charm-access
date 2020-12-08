import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './screens/Home';
import About from './screens/About';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./screens/Products";
import Shipping from "./screens/Shipping";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import {getCategoriesState, getProductsState} from "./state/apiActions";
import {useDispatch} from "react-redux";
import {ModalProvider} from "./context/modalContext";
import ScrollToTop from "./components/ScrollToTop";
import EditProducts from "./dashboard/EditProducts";
import EditCategories from "./dashboard/EditCategories";
import EditProduct from "./dashboard/EditProduct";
import ProtectedRoute from "./ProtectedRoute";

function App() {
    // preload
    const dispatch = useDispatch();
    dispatch(getCategoriesState());
    dispatch(getProductsState('shop', 1))
    return (
        <BrowserRouter>
            <ScrollToTop>
                <ModalProvider>
                    <Header />
                    <div className="spacer-header-compensate">&nbsp;</div>
                    <div className="wrap" >
                        <Route path="/" component={Home} exact />
                        <Route path="/product/:id" component={Product} />
                        <Route path="/products/:category/:page" component={Products} />
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
                    </div>
                    <Footer />
                </ModalProvider>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;

