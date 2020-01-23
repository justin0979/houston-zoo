import { combineReducers } from 'redux';
import statuePics from './statuePicsReducer';
import liveAnimalPics from './liveAnimalPicsReducer';
import fetchedPic from './fetchedPic';
import fetchedId from './fetchedPic';
import fetchedOriginalPic from './fetchedOriginalPicReducer';

export default combineReducers({
  statuePics,
  liveAnimalPics,
  fetchedPic,
  fetchedId,
  fetchedOriginalPic
});
