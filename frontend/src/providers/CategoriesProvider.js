import React, {useState, createContext, useEffect} from 'react';
import Axios from "axios";
import config from "../config";
const { api } = config;

export const CategoriesContext = createContext();

export const CategoriesProvider = props => {
    const [categories, setCategories] = useState( []);
    useEffect(() => {
        (async () => {
            // const { data } = await Axios.get(`/api/categories`);
            const { data } = await Axios.get(`${api}/categories`);
            setCategories(data);
        })();
    }, []);
    return (
        <CategoriesContext.Provider value={ { categories } }>
            {props.children}
        </CategoriesContext.Provider>
    );
}
