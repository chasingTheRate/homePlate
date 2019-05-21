import * as actionTypes from '../_actions/actionTypes';

const initialState = {
  standings: [],
  boxscores: {},
}

export default function blindsReducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.GET_STANDINGS_SUCCESSFUL:
      return Object.assign({}, state, { 
        standings: action.standings,
      })
    case actionTypes.GET_BOXSCORES_SUCCESSFUL:
      return Object.assign({}, state, { 
        boxscores: action.boxscores,
      })
    default:
      return state;
  }
}