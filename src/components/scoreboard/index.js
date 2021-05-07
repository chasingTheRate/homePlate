import React from 'react';
import styled from 'styled-components';
import FlexBox from '../styled/flexbox';
import Container from '../styled/container';
import BoxScore from '../boxScore';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.gridTemplateColumns}, 1fr)` || 'repeat(1, 1fr)'};
  grid-template-rows: ${props => props.gridTemplateRows || ''};
`;

const Scoreboard = ({scoresMatrix, expandBoxscores}) => {
  const displayBoxScores = () => {
    const elements = [];
    scoresMatrix.map((scores, index1)  => {
      elements.push(
        <Container key={index1} padding='0'>
          {scores.map((score, index2) => (
            <div key={index2} style={{width: '100%'}}>
              <BoxScore
                score={score}
                expand={expandBoxscores && score.status !== 'Postponed'}
              />
            </div>
          ))}
        </Container>
      )
    })
    return elements;
  }

  return (
    <Container padding='0'>
      <GridContainer gridTemplateColumns={scoresMatrix.length}>
        {displayBoxScores()}
      </GridContainer>
    </Container>
  )
}

export default Scoreboard