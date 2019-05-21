import { combineReducers } from 'redux';
import app from './appReducers';
import mlb from './mlbReducers';

const rootReducer = combineReducers({
  app,
  mlb
});

export default rootReducer;