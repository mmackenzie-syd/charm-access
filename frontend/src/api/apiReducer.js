
export const initial = {
    isLoading: false,
    data: {},
    error: {}
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'REQUEST':
            return { isLoading: true };
        case 'SUCCESS':
            return { isLoading: false, data: action.payload };
        case 'FAIL':
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
}
