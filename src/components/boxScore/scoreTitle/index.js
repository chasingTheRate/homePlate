import React from 'react';
import moment from 'moment';
import abstractGameCodes from '../../../models/abstractGameCodes';
import inningHalfTypes from '../../../models/inningHalfTypes';
import theme from '../../../style/theme';
import FlexBox from '../../styled/flexbox';

const ScoreTitle = ({
  awayTeamName,
  homeTeamName,
  awayTeamRuns,
  homeTeamRuns,
  gameStatus,
  gameDate,
  currentInningOrdinal,
  inningHalf,
}) => {
 
  const getScoreTitle = () => {
    var element;
    if (gameStatus.abstractGameCode === abstractGameCodes.final || gameStatus.abstractGameCode === abstractGameCodes.live) {
      var scoreTitle = '';
      if(awayTeamRuns > homeTeamRuns) {
        scoreTitle = `${awayTeamName} ${awayTeamRuns}, ${homeTeamName} ${homeTeamRuns}`;
      } else {
        scoreTitle = `${homeTeamName} ${homeTeamRuns}, ${awayTeamName} ${awayTeamRuns}`;
      }
      element = <span><b>{scoreTitle}</b></span>;
    } else {
      element = <span><b>{awayTeamName}</b><span style={{color: theme.colors.medium}}> @ </span><b>{homeTeamName}</b></span>;
    }
    return element;
  };

  const getGameStatus = () => {
    let status = ''
    let color = theme.colors.dark;
    if (gameStatus.abstractGameCode === abstractGameCodes.final) {
      status = 'Final';
    } else if (gameStatus.abstractGameCode === abstractGameCodes.live) {
      let innHalf = ''
      if (inningHalf === inningHalfTypes.bottom) {
        innHalf = inningHalfTypes.bot;
      } else {
        innHalf = inningHalfTypes.top;
      }
      status = `${innHalf} ${currentInningOrdinal}`;
    } else {
      color = theme.colors.medium;
      status = moment(gameDate).utcOffset(-5).format('h:mm a');
    }
    return <span style={{ fontSize:"10px", color: color }}><b>{status}</b></span>;
  }

  return (
    <FlexBox
      alignItems="center"
    >
      <div>{getScoreTitle()}</div>
      <FlexBox flexGrow={1} justifyContent="flex-end" alignItems="center">
        {getGameStatus()}
      </FlexBox>
    </FlexBox>
  )
}

export default ScoreTitle;