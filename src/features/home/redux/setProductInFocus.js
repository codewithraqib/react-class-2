import { HOME_SET_PRODUCT_IN_FOCUS } from './constants';

export function setProductInFocus(data) {
  // console.log('TESTING data got to store---', data);
  return {
    type: HOME_SET_PRODUCT_IN_FOCUS,
    data: data,
  };
}

export function reducer(state, action) {
  // console.log('TESTING reducer is called---', action);
  switch (action.type) {
    case HOME_SET_PRODUCT_IN_FOCUS:
      // console.log('TESTING case got to store---', action);
      return {
        ...state,
        productInFocus: action.data,
      };

    default:
      return state;
  }
}
