import * as actionTypes from '../_actions/actionTypes';

const initialState = {
  deviceSize: ''
}

export default function blindsReducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.DEVICE_DID_CHANGE_SIZE:
      return Object.assign({}, state, { 
        deviceSize: action.deviceSize,
      })
    default:
      return state;
  }
}