const initialState = [];

export const products = (state = initialState, action) => {
    if (action.type === 'PRODUCTS_GET') {
        return action.payload.products;
    }

    return state;
}