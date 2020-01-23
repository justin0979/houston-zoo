import { ORIGINAL_PICTURE } from '@actions/types';

export default (pic = null, action) => {
  switch (action.type) {
    case ORIGINAL_PICTURE:
      return action.payload;
    default:
      return pic;
  }
};
