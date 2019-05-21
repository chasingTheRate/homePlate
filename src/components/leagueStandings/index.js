import React from 'react';
import styled from 'styled-components';
import Container from '../styled/container';
import theme from '../../style/theme';

const StandingsTH = styled.th`
  text-align: ${props => props.textAlign || 'right'};
  width: ${props => props.width || '10%'};
  padding: ${props => props.padding || '0'};  
`;

const StandingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
`;

const tableStyle = {
  width:"100%",
  borderCollapse:"collapse",
  margin: "2px 0 0 0"
}

const LeagueStanding = ({title, league, divisions}) => {
  return (
    <div>
      <Container
        padding="0"
        margin="0 0 5px 0"
        color={theme.colors.medium}
      >
        <span><b>{title}</b></span>
      </Container>
      {league.map(division => {
          const divisionName = divisions[division.division.id];
          return(
            <Container
              key={division.division.id}
              padding="0"
              margin="0 0 5px 0"
            >
              <StandingsTable>
                <tbody>
                <tr>
                  <StandingsTH textAlign={"left"} width='auto'>{divisionName}</StandingsTH>
                  <StandingsTH>W</StandingsTH>
                  <StandingsTH>L</StandingsTH>
                  <StandingsTH>PCT</StandingsTH>
                  <StandingsTH>GB</StandingsTH>
                  <StandingsTH>L10</StandingsTH>
                  <StandingsTH width='12%' >STRK</StandingsTH>
                </tr>
                {division.teamRecords.map(teamRecord => {
                  const lastTen = teamRecord.records.splitRecords.find(rec => rec.type === 'lastTen' );
                  return (
                    <tr key={teamRecord.team.id}>
                      <td style={{textAlign: "left"}}>{teamRecord.team.name}</td>
                      <td style={{textAlign: "right"}}>{teamRecord.wins}</td>
                      <td style={{textAlign: "right"}}>{teamRecord.losses}</td>
                      <td style={{textAlign: "right"}}>{teamRecord.winningPercentage}</td>
                      <td style={{textAlign: "right"}}>{teamRecord.gamesBack}</td>
                      <td style={{textAlign: "right"}}>{`${lastTen.wins} - ${lastTen.losses}`}</td>
                      <td style={{textAlign: "right"}}>{teamRecord.streak.streakCode}</td>
                    </tr>
                  )
                })}
                </tbody>
              </StandingsTable>
            </Container>
          )
        })}
    </div>
  )
}

export default LeagueStanding;
