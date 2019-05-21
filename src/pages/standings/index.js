import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as mlbApi from '../../api/mlbApi';
import * as mlbActions from '../../_actions/mlbActions'
import mlb from '../../models/mlb';
import LeagueStandings from '../../components/leagueStandings';
import Container from '../../components/styled/container';
import FlexBox from '../../components/styled/flexbox';
import theme from '../../style/theme';

class Standings extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    
  }
  
  formatLastTen({wins, losses}) {
    return `${wins} - ${losses}`;
  }
  render() {
    const { standings } = this.props || [];
    return (
      <div>
        <FlexBox
          flexWrap="wrap">
          <Container
            backgroundColor="white"
            margin="8px"
            borderRadius="5px"
            borderColor={theme.colors.medium}
            borderWidth="1px"
            borderStyle="solid"
            flexGrow={1}
          >
            <LeagueStandings
              title="American League"
              league={standings.filter(div => (div.league.id === mlb.leagues.american.id))}
              divisions={mlb.leagues.american.divisions}
            />
          </Container>
          <Container
            backgroundColor="white"
            margin="8px"
            borderRadius="5px"
            borderColor={theme.colors.medium}
            borderWidth="1px"
            borderStyle="solid"
            flexGrow={1}
          >
            <LeagueStandings
              title="National League"
              league={standings.filter(div => (div.league.id === mlb.leagues.national.id))}
              divisions={mlb.leagues.national.divisions}
            />
          </Container>
        </FlexBox>
      </div>
    )
  }
}

export default Standings;


