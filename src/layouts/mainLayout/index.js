import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../../components/header';
import Container from '../../components/styled/container';

class MainLayout extends Component {
  constructor(props) {
    super(props);

    //this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      deviceSize: ''
    }
  }

  componentDidMount(){
    //window.addEventListener('resize', this.updateWindowDimensions);
    //this.updateWindowDimensions();
  }

  componentWillMount(){
    //window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  // updateWindowDimensions() {
  //   const { deviceDidChangeSize } = this.props;
  //   const { deviceSize } = this.state;
  //   let didChangeSize = false;
  //   let localDeviceSize = '';
  //   if (window.innerWidth <= devices.smallDevices.minWidth && deviceSize !== devices.smallDevices.name)  {
  //     didChangeSize = true;
  //     localDeviceSize = devices.smallDevices.name
  //   } else if (window.innerWidth > devices.smallDevices.minWidth && window.innerWidth <= devices.mediumDevices.minWidth && deviceSize !== devices.mediumDevices.name ) {
  //     didChangeSize = true;
  //     localDeviceSize = devices.mediumDevices.name
  //   } else if (window.innerWidth > devices.mediumDevices.minWidth && deviceSize !== devices.largeDevices.name) {
  //     didChangeSize = true;
  //     localDeviceSize = devices.largeDevices.name
  //   }
  //   if (didChangeSize) {
  //     deviceDidChangeSize(localDeviceSize);
  //   }
  // }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>Just Box Scores</title>
          <meta name="Description" content="Just sports box scores. Fast!"></meta>
        </Head>
        <Container padding="0" fontFamily="Georgia">
          <Header/>
          <Container margin="40px 0 0 0">
            { children }
          </Container>
        </Container>
      </div>
    )
  }
}

// function mapStateToProps(state, ownProps) {
//   return {
//     deviceSize: state.app.deviceSize,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     deviceDidChangeSize: (deviceSize) => dispatch(appActions.deviceDidChangeSize(deviceSize)),
//   };
// }

export default MainLayout //withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout));
