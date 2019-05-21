import React, { Component } from 'react';
import MainLayout from '../src/layouts/mainLayout';
import StatView from '../src/pages/stats';
import * as dugoutApi from '../src/api/dugoutApi';

class Stats extends Component {
  static async getInitialProps() {
    const leagueLeaders = await dugoutApi.getLeagueLeaders();
    return { leagueLeaders };
  }

  render() {
    const { leagueLeaders } = this.props;
    return (
      <MainLayout>
        <StatView leagueLeaders={ leagueLeaders }/>
      </MainLayout>
    )
  }
}
export default Stats;