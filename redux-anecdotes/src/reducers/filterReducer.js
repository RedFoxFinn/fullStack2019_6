
const initialState = {
  filter: '',
  state: false
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_FILTER':
    return {...state, filter: action.filter, state: true};
  case 'RESET_FILTER':
    return {...state, filter: '', state: false};
  default:
    return state;
  }
};

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter: filter
  };
};

export const resetFilter = () => {
  return {
    type: 'RESET_FILTER'
  };
};

export default filterReducer;