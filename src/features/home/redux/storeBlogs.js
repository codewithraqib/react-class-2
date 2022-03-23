import { HOME_STORE_BLOGS } from './constants';

export function storeBlogs(data) {
  return {
    type: HOME_STORE_BLOGS,
    data: data,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_STORE_BLOGS:
      return {
        ...state,
        blogs: action.data,
      };

    default:
      return state;
  }
}
