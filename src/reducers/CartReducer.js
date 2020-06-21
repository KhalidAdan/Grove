
export const cartReducer = (state, action, item) => {
    switch (action.type) {
        case 'ADD_ITEM': 
            return [...state, item];
        case 'INCREMENT_ITEM':
            return 1;
        case 'REMOVE_ITEM':
            return state.filter(cart => item.id !== action.id);
        case 'DECREMENT_ITEM':
            return 1;
        default:
            return state;
    }
}