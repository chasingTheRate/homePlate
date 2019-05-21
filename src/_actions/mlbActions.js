import * as actionTypes from './actionTypes';
import * as mlbApi from '../api/mlbApi';

export function getStandingsSuccessful(standings) {
  return {
    type: actionTypes.GET_STANDINGS_SUCCESSFUL,
    standings
  }
}

export function getStandings() {
  return function(dispatch) {
    return mlbApi.getStandings()
      .then( standingsResponse => {
        dispatch(getStandingsSuccessful(standingsResponse));
      });
  }
}