import { HOME_STORE_BLOGS } from './constants';

export function storeBlogs(data) {
  console.log('TESTING data got to store---', data);
  return {
    type: HOME_STORE_BLOGS,
    data: data,
  };
}

export function reducer(state, action) {
  console.log('TESTING reducer is called---', action);
  switch (action.type) {
    case HOME_STORE_BLOGS:
      console.log('TESTING case got to store---', action);
      return {
        ...state,
        blogs: action.data,
      };

    default:
      return state;
  }
}
