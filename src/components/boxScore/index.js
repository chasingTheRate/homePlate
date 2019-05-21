import React, { Component } from 'react';
import ScoreTitle from './scoreTitle';
import LineScore from './lineScore';
import Container from '../styled/container';
import FlexBox from '../styled/flexbox';
import BattingSummary from './battingSummary';
import PitchingSummary from './pitchingSummary';
import GameInfo from './gameInfo';
import abstractGameCodes from '../../models/abstractGameCodes';
import statusCodes from '../../models/statusCodes';
import theme from '../../style/theme';


class Boxscore extends Component {
  constructor(props) {
    super(props);

    this.expandBoxscore = this.expandBoxscore.bind(this);
    this.allowedToExpand = this.allowedToExpand.bind(this);
    this.didClickBoxscore = this.didClickBoxscore.bind(this);

    const {abstractGameCode, statusCode } = props.score.status;

    this.state = {
      isExpanded: props.expand || false,
      allowedToExpand: this.allowedToExpand(statusCode, abstractGameCode),
    }
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.score._id !== this.props.score._id) {
      const {abstractGameCode, statusCode } = nextProps.score.status;
      this.setState({
        allowedToExpand: this.allowedToExpand(statusCode, abstractGameCode),
      })
    }
    return true;
  }

  expandBoxscore(){
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  allowedToExpand(statusCode, abstractGameCode){
    return (
      (abstractGameCode === abstractGameCodes.final || abstractGameCode === abstractGameCodes.live) &&
      statusCode !== statusCodes.postponed
    );
  }

  didClickBoxscore(){
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
  
  render() {
    const { score } = this.props;
    const { isExpanded, allowedToExpand } = this.state;
    return (
      <Container
        fontFamily="Georgia" 
        fontSize='10px'
        color={ theme.colors.dark }
        backgroundColor="white"
        margin="8px"
        borderRadius="5px"
        borderColor={theme.colors.medium}
        borderWidth="1px"
        borderStyle="solid"
      > 
        <FlexBox
          alignItems="center"
          flexDirection="row-reverse"
          onClick={this.didClickBoxscore}
        >
          <Container
            flexGrow={1}
            fontSize="14px"
            padding="0"
          >
            <ScoreTitle
              awayTeamName={ score.awayTeamName }
              homeTeamName= { score.homeTeamName }
              awayTeamRuns= { score.linescore.teams.away.runs }
              homeTeamRuns= { score.linescore.teams.home.runs }
              gameStatus={ score.status }
              gameDate={ score.gameDate }
              currentInningOrdinal = { score.linescore.currentInningOrdinal }
              inningHalf = { score.linescore.inningHalf }
            />
          </Container>
        </FlexBox>
        { isExpanded && allowedToExpand &&
          <Container padding="0" margin="5px 0 0 0">
            <LineScore 
              linescore={ score.linescore }
              home_sname={ score.homeShortName }
              away_sname={ score.awayShortName }
            />
            <BattingSummary
              awayBatters = { score.awayBatters }
              homeBatters = { score.homeBatters }
              away_sname={ score.awayShortName }
              home_sname={ score.homeShortName }
              fieldingAndBattingInfo={ score.fieldingAndBattingInfo }
            />
            <PitchingSummary
              awayPitchers={ score.awayPitchers } 
              homePitchers={ score.homePitchers } 
              away_sname={ score.awayShortName }
              home_sname={ score.homeShortName }
            />
            
            <GameInfo
              gameInfo={ score.pitchingAndGameInfo }
            />
          </Container>
          }
      </Container>
    )
  }
}

export default Boxscore;
