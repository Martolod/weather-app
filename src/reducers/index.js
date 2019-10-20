import { combineReducers } from 'redux';
import weather from './weather';
import modal from './modal';

export default combineReducers({
  weather,
  modal
})