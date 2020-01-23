import { PICTURE } from '@actions/types';

export default (pic = null, action) => {
  switch (action.type) {
    case PICTURE:
      return action.payload;
    default:
      return pic;
  }
};
