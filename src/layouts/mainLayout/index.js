import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Header from '../../components/header';
import Container from '../../components/styled/container';
import devices from '../../util/devices';
import * as appActions from '../../_actions/appActions';

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      deviceSize: ''
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();
  }

  componentWillMount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    const { deviceDidChangeSize } = this.props;
    const { deviceSize } = this.state;
    let didChangeSize = false;
    let localDeviceSize = '';
    if (window.innerWidth <= devices.smallDevices.minWidth && deviceSize !== devices.smallDevices.name)  {
      didChangeSize = true;
      localDeviceSize = devices.smallDevices.name
    } else if (window.innerWidth > devices.smallDevices.minWidth && window.innerWidth <= devices.mediumDevices.minWidth && deviceSize !== devices.mediumDevices.name ) {
      didChangeSize = true;
      localDeviceSize = devices.mediumDevices.name
    } else if (window.innerWidth > devices.mediumDevices.minWidth && deviceSize !== devices.largeDevices.name) {
      didChangeSize = true;
      localDeviceSize = devices.largeDevices.name
    }
    if (didChangeSize) {
      deviceDidChangeSize(localDeviceSize);
    }
  }

  render() {
    const { children, history } = this.props;
    const { deviceSize } = this.state;
    return (
      <Container padding="0" fontFamily="Georgia">
        <Header history={history} />
        <Container margin="40px 0 0 0">
          {children}
        </Container>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    deviceSize: state.app.deviceSize,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deviceDidChangeSize: (deviceSize) => dispatch(appActions.deviceDidChangeSize(deviceSize)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout));
