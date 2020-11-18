import React, {useState, createContext, useEffect} from 'react';
import Axios from "axios";
import config from "../config";
const { api } = config;

export const ProductsContext = createContext();

export const ProductsProvider = props => {
    const [products, setProducts] = useState( []);
    const [pages, setPages] = useState( 0);
    const [page, setPage] = useState( 1);


    const callback = (page) => {
        // (async () => {
        //     // const { data } = await Axios.get(`/api/categories`);
        //     const { data } = await Axios.get(`/api/products/shop/${page}`)
        //     console.log('data', data)
        //     setProducts(data.products);
        //     setPages(data.pages);
        // })();
        setPage(page)
    }

    useEffect(() => {
        (async () => {
            // const { data } = await Axios.get(`/api/categories`);
            const { data } = await Axios.get(`/api/products/shop/1`)
            console.log('data', data)
            setProducts(data.products);
            setPages(data.pages);
        })();
    }, [page]);
    return (
        <ProductsContext.Provider value={ { products, callback, pages, page } }>
            {props.children}
        </ProductsContext.Provider>
    );
}


// useEffect(() => {
//     const fetchData = async () => {
//         setIsLoading(true);
//         const { data } = await Axios.get(`/api/products/${categorySlug}/${curPage}`);
//         // const { data } = await Axios.get(`${api}/products/${category}/${curPage}`);
//         setData(data);
//         setIsLoading(false);
//         // timer = setTimeout(() => {
//         //     setData(data);
//         //     setIsLoading(false);
//         // }, 1500);
//         // return () => clearTimeout(timer);
//     };
//     fetchData();
// }, [curPage, categorySlug]);