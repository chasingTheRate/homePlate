import React from 'react';
import styled from 'styled-components';

const ScoreTitle = ({away_team_name, home_team_name, away_team_runs, home_team_runs}) => {
 
  const getScoreTitle = () => {
    var scoreTitle = '';
    if(away_team_runs > home_team_runs) {
      scoreTitle = `${away_team_name} ${away_team_runs}, ${home_team_name} ${home_team_runs} `
    } else {
      scoreTitle = `${home_team_name} ${home_team_runs}, ${away_team_name} ${away_team_runs} `
    }
    return <span><b>{scoreTitle}</b></span>
  };

  return (
    <div>{getScoreTitle()}</div>
  )
}

export default ScoreTitle;