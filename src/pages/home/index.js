import React, {Component} from 'react';
import Container from '../../components/styled/container';
import Scoreboard from '../../components/scoreboard';

class Home extends Component {
  getScoresMatrix(scores = [], isMobile) {
    let scoresMatrix = []
    let mod = 1;

    if (!isMobile) {
      mod = 3
    }
      
    for (var i=0; i<= mod-1; i++) {
      scoresMatrix.push([]);
    };

    scores.map((score, index) => {
      scoresMatrix[index % mod].push(score);
    })
   
    return scoresMatrix;
  }

  render() {
    const { boxscores, isMobile } = this.props;
    const scoresMatrix = this.getScoresMatrix(boxscores, isMobile);
    return (
      <Container padding='0' margin="auto">
        {boxscores.length > 0 && 
          <Scoreboard
            scoresMatrix={scoresMatrix}
            expandBoxscores={!this.props.isMobile}
          />
        }
      </Container>
    )
  }
}


export default Home;
