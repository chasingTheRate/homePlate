import * as actionTypes from './actionTypes';

export function deviceDidChangeSize(deviceSize) {
  return {
    type: actionTypes.DEVICE_DID_CHANGE_SIZE,
    deviceSize
  }
}