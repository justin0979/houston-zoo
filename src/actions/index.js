import { ORIGINAL_PICTURE, PICTURE, ID } from '@actions/types';

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

export const fetchOriginalPic = pic => {
  return {
    type: ORIGINAL_PICTURE,
    payload: pic
  };
};
