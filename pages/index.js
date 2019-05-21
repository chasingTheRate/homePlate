import React, { Component } from 'react';
import Router from 'next/router';
import moment from 'moment';
import config from '../config';
import MainLayout from '../src/layouts/mainLayout';
import HomeView from '../src/pages/home';
import ActionBar from '../src/components/actionBar';
import * as dugoutApi from '../src/api/dugoutApi';
import * as util from '../src/util';

class Home extends Component {
  static async getInitialProps({ req, query }) {
    const isMobile = util.isMobile(req);
    const fullDate = query.date || Home.getDate();
    const day = moment(fullDate, "L").format('ddd');
    const date = moment(fullDate, "L").format('DD');
    const boxscores = await dugoutApi.getBoxscoresByDate(fullDate);
    return { boxscores, isMobile, fullDate, day, date };
  }

  static getDate(){
    return moment().utcOffset(config.utcOffset).format('L');
  }

  static didChangeDate(date){
    Router.push(`/?date=${date}`);
  }

  render() {
    const { boxscores, isMobile, fullDate, day, date } = this.props;
    return (
      <MainLayout>
        <ActionBar
          fullDate={fullDate}
          day={day}
          date={date}
          didChangeDate={Home.didChangeDate}/>
        <HomeView
          boxscores={ boxscores || [] }
          isMobile={ isMobile }
        />
      </MainLayout>
    )
  }
}

export default Home;