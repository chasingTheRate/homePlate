import * as actionTypes from './actionTypes';
import * as mlbApi from '../api/mlbApi';
import * as dugoutApi from '../api/dugoutApi';

export function getStandingsSuccessful(standings) {
  return {
    type: actionTypes.GET_STANDINGS_SUCCESSFUL,
    standings
  }
}

export function getBoxscoresSuccessful(boxscores) {
  return {
    type: actionTypes.GET_BOXSCORES_SUCCESSFUL,
    boxscores
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

export function getBoxscoresByDate(date) {
  return function(dispatch) {
    return dugoutApi.getBoxscoresByDate(date)
      .then( response => {
        const boxscores = response.data;
        dispatch(getBoxscoresSuccessful(boxscores));
      });
  }
}