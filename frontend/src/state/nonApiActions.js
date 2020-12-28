
// Non api product actions
export const setProductsNew = (products, dispatch) => {
    dispatch({
        type: 'PRODUCTS_NEW',
        payload: { products, pages: 1 }
    });
};
