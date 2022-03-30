import { HOME_SET_GALLERY } from './constants';

export function setGallery(data) {
  return {
    type: HOME_SET_GALLERY,
    data: data,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_SET_GALLERY:
      return {
        ...state,
        gallery: action.data,
      };

    default:
      return state;
  }
}
