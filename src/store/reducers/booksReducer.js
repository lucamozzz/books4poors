export const booksReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'SET_BOOKS':
            state = payload;
            return state;
        default:
            return state;
    }
};