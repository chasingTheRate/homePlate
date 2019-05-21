import React, { Component } from 'react';
import moment from 'moment';
import config from '../config';
import MainLayout from '../src/layouts/mainLayout';
import HomeView from '../src/pages/home';
import StandingsView from '../src/pages/standings';
import * as dugoutApi from '../src/api/dugoutApi';
import * as mlbApi from '../src/api/mlbApi';
import * as util from '../src/util';

class Standings extends Component {
  static async getInitialProps({ req, query }) {
    const standings = await mlbApi.getStandings();
    return { standings };
  }

  render() {
    const { standings } = this.props;
    return (
      <MainLayout>
        <StandingsView standings={ standings }/>
      </MainLayout>
    )
  }
}

export default Standings;