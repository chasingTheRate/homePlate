import React, { Component } from 'react';
import Link from 'next/link';
import FlexBox from '../styled/flexbox';
import Container from '../styled/container';
import NavBar from '../styled/navBar';
import theme from '../../style/theme';
import navBarOptions from '../../models/navBarOptions';

const linkStyle = {
  textDecoration: 'none',
  color: theme.colors.light,
};

const Header = (props) => {
  return (
    <NavBar>
      <FlexBox
        justifyContent="center"
        alignItems="center"
      >
        <Container
          fontSize="18px"
          margin="0 10px 0 0"
        >
          <span><b>JBS</b></span>
        </Container>
        <FlexBox
          flexGrow={1}
          alignItems="center"
        > 
          {navBarOptions.map(option => {
            return (
              <Container
                key={option.id}
                fontSize="14px"
                textAlign="center"
                minWidth="100px"
              >
                <Link
                  href={option.path}
                ><a style={linkStyle}>{option.displayName}</a></Link>
              </Container>
            )})
          }
        </FlexBox>
      </FlexBox>
    </NavBar>
  );
}
    


export default Header;