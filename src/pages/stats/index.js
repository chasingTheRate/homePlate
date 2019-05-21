import React, { Component } from 'react';
import * as mlbApi from '../../api/mlbApi';
import Container from '../../components/styled/container';
import FlexBox from '../../components/styled/flexbox';
import theme from '../../style/theme';

class Stats extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { leagueLeaders } = this.props;
    return (
      <div>
        <Container padding="0" margin="auto">
          <FlexBox flexWrap="wrap">
            { leagueLeaders.map((leagueLeader, index) => {
                return (
                  <Container
                    key={index}
                    maxWidth="150px"
                    backgroundColor="white"
                    margin="8px"
                    borderRadius="5px"
                    borderColor={theme.colors.medium}
                    borderWidth="1px"
                    borderStyle="solid"
                    flexGrow={1}
                  >
                    <div><span style={{color: theme.colors.dark}}><b>{leagueLeader.leaderCategory}</b></span></div>
                    <table style={{width: '100%'}}>
                      <tbody>
                        <tr>
                          <th width='20%'></th>
                          <th width="auto"></th>
                          <th width="20%"></th>
                        </tr>
                        {leagueLeader.leagueleaders.map((leader, index) => 
                          {
                            return (
                              <tr key={index}>
                                <td style={{textAlign: "left"}}>{ leader.teamAbbreviation }</td>
                                <td style={{textAlign: "left"}}>{ leader.lastFirstName }</td>
                                <td style={{textAlign: "right"}}>{ leader.value }</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </Container>
                )
              })
            }
          </FlexBox>
        </Container>
      </div>
    )
  }
}

export default Stats;