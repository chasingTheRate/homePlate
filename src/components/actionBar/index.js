import React, { Component } from 'react';
import Container from '../styled/container';
import FlexBox from '../styled/flexbox';
import theme from '../../style/theme';
import moment from 'moment';
import * as images from '../../../static/images';


class ActionBar extends Component {

  constructor(props) {
    super(props);
    this.didClickGoBack = this.didClickGoBack.bind(this);
    this.didClickGoForward = this.didClickGoForward.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.state = {
      fullDate: props.fullDate,
    }
  }

  changeDate(increment) {
    const { didChangeDate } = this.props;
    const newDate = moment(this.state.fullDate, 'L').add(increment, "days").format('L');
    this.setState({
      fullDate: newDate
    }, didChangeDate(newDate))
  }

  didClickGoBack() {
    this.changeDate(-1);
  }

  didClickGoForward() {
    this.changeDate(1);
  }

  render() {
    const { day, date } = this.props;
    return (
      <Container padding="0">
        <FlexBox alignItems="center" justifyContent="center">
          <input
            type="image"
            src={images.arrowLeft}
            value="<"
            onClick={this.didClickGoBack}
            background={`url(${images.arrowLeft}) no-repeat`}
          />
          <Container 
            fontFamily="Georgia" 
            fontSize='10px'
            color={ theme.colors.dark }
            backgroundColor="white"
            margin="8px"
            width="40px"
            padding="8px"
            borderRadius="5px"
            borderColor={theme.colors.medium}
            borderWidth="1px"
            borderStyle="solid"
          > 
            <FlexBox
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <div style={{ color: theme.colors.medium }}>{day}</div>
              <div style={{ fontSize: '20px' }}>{date}</div>
            </FlexBox>
          </Container>
          <input
            type="image"
            src={images.arrowRight}
            onClick={this.didClickGoForward}
            background={`url(${images.arrowLeft}) no-repeat`}
          />
        </FlexBox>
      </Container>
    )
  }
}

export default ActionBar;
