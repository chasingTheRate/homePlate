import * as actionTypes from '../_actions/actionTypes';

const initialState = {
  standings: []
}

export default function blindsReducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.GET_STANDINGS_SUCCESSFUL:
      return Object.assign({}, state, { 
        standings: action.standings,
      })
    default:
      return state;
  }
}