import { PICTURE, ID } from '@actions/types';

export const fetchPic = pic => {
  return {
    type: PICTURE,
    payload: pic
  };
};

export const fetchId = id => {
  return {
    type: ID,
    payload: id
  };
};
