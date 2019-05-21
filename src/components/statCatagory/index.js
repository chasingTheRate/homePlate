import React from 'react';
import styled from 'styled-components';
import Container from '../styled/container';
import theme from '../../style/theme';

const StandingsTH = styled.th`
  text-align: ${props => props.textAlign || 'right'};
  width: ${props => props.width || '10%'};
  padding: ${props => props.padding || '0'};  
`;

const StatLeaderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
`;

const tableStyle = {
  width:"100%",
  borderCollapse:"collapse",
  margin: "2px 0 0 0"
}

const StatCategory = ({title, leaders}) => {
  return (
    <div>
      <Container
        padding="0"
        margin="0 0 5px 0"
        color={theme.colors.medium}
      >
        <span><b>{state.title}</b></span>
      </Container>
        <Container
          key={division.division.id}
          padding="0"
          margin="0 0 5px 0"
        >
          <StatLeaderTable>
            <tbody>
            <tr>
              <StatLeaderTH width='10%'></StatLeaderTH>
              <StatLeaderTH width='10%'></StatLeaderTH>
              <StatLeaderTH width='10%'></StatLeaderTH>
            </tr>
            {division.teamRecords.map((teamRecord, index) => {
              return (
                <tr key={index}>
                  <td style={{textAlign: "left"}}>{teamRecord.team.name}</td>
                  <td style={{textAlign: "right"}}>{teamRecord.wins}</td>
                  <td style={{textAlign: "right"}}>{teamRecord.losses}</td>
                </tr>
              )
            })}
            </tbody>
          </StatLeaderTable>
        </Container>
    </div>
  )
}

export default StatCategory;
