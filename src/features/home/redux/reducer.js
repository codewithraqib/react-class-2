import initialState from './initialState';
import { reducer as storeBlogs } from './storeBlogs';
import { reducer as setBlogInFocus } from './setBlogInFocus';

const reducers = [storeBlogs, setBlogInFocus];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
