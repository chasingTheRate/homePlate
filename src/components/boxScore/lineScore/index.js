import React from 'react';

import FlexBox from '../../styled/flexbox';

const LineScore = ({ linescore, away_sname, home_sname }) => {
  
  const inning_line_score = linescore.innings;
  const away_team_hits = linescore.teams.away.hits;
  const away_team_runs = linescore.teams.away.runs;
  const away_team_errors = linescore.teams.away.errors;
  const home_team_runs = linescore.teams.home.runs;
  const home_team_hits = linescore.teams.home.hits;
  const home_team_errors = linescore.teams.home.errors;

  const isThirdColumn = (index) => {
    return index % 3 === 0;
  };

  const listInnings = inning_line_score.map((inning) => (
    <FlexBox 
      key={inning.num} 
      margin={isThirdColumn(inning.num) ? '0 5px 0 0' : '0'}
      flexDirection="column">
        <span><b>{ inning.away.runs }</b></span>
        <span><b>{ inning.home.runs }</b></span>
    </FlexBox>
  ));
  

  return (
    <div>
      <hr style={{margin: '0 0 3px 0'}}/>
      <FlexBox>
        <FlexBox flexGrow={1} flexDirection="column">
          <span><b>{ away_sname }</b></span>
          <span><b>{ home_sname }</b></span>
        </FlexBox>
        <FlexBox justifyContent="flex-end" flexGrow={2}>
          <FlexBox>
            { listInnings }
          </FlexBox>
          <FlexBox flexDirection="column" margin={'0 10px 0 5px'}>
            <span><b>-</b></span>
            <span><b>-</b></span>
          </FlexBox>
          <FlexBox>
            <FlexBox flexDirection="column" margin={'0 10px 0 0'}>
              <span><b>{away_team_runs}</b></span>
              <span><b>{home_team_runs}</b></span>
            </FlexBox>
            <FlexBox flexDirection="column" margin={'0 10px 0 0'}>
              <span><b>{away_team_hits}</b></span>
              <span><b>{home_team_hits}</b></span>
            </FlexBox>
            <FlexBox flexDirection="column">
              <span><b>{away_team_errors}</b></span>
              <span><b>{home_team_errors}</b></span>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <hr style={{margin: '3px 0 0 0'}}/>
    </div>
  )
}

export default LineScore;