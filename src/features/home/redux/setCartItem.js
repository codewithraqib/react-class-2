import { HOME_SET_CART_ITEM } from './constants';

export function setCartItem(data) {
  // console.log('TESTING data got to store---', data);
  return {
    type: HOME_SET_CART_ITEM,
    data: data,
  };
}

export function reducer(state, action) {
  // console.log('TESTING reducer is called---', action);
  switch (action.type) {
    case HOME_SET_CART_ITEM:
      // console.log('TESTING case got to store---', action);
      return {
        ...state,
        cartItems: action.data,
      };

    default:
      return state;
  }
}
