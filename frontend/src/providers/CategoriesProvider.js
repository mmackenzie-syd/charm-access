import React, {useState, createContext, useEffect} from 'react';
import Axios from "axios";
import config from "../config";
const { api } = config;

export const CategoriesContext = createContext();

export const CategoriesProvider = props => {
    const [categories, setCategories] = useState( []);
    const [count, setCount] = useState( 1);


    const callback = () => {
        console.log('hello');
        setCount(count + 1);
    }

    useEffect(() => {
        (async () => {
            // const { data } = await Axios.get(`/api/categories`);
            const { data } = await Axios.get(`${api}/categories`);
            setCategories(data);
        })();
    }, []);
    return (
        <CategoriesContext.Provider value={ { categories, callback, count } }>
            {props.children}
        </CategoriesContext.Provider>
    );
}
