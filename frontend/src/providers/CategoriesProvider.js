import React, {useState, createContext, useEffect} from 'react';
import Axios from "axios";

export const CategoriesContext = createContext();

export const CategoriesProvider = props => {
    const [categories, setCategories] = useState( []);
    useEffect(() => {
        (async () => {
            const { data } = await Axios.get(`/api/categories`);
            setCategories(data);
        })();
    }, []);
    return (
        <CategoriesContext.Provider value={ { categories } }>
            {props.children}
        </CategoriesContext.Provider>
    );
}
