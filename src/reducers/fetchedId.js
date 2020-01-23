import { ID } from '@actions/types';

export default (id = null, action) => {
  switch (action.type) {
    case ID:
      return action.payload;
    default:
      return id;
  }
};
