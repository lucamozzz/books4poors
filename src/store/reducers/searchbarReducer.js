const intialState = {
    keyword: '',
  };
  
  export const searchbarReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case 'SEARCH':
        return { ...state, keyword: payload };
      default:
        return state;
    }
  };