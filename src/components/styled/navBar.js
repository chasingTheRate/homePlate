import styled from 'styled-components';
import theme from '../../style/theme';

export default styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${theme.navBar.height};
  box-shadow: ${theme.navBar.boxShadow};
  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};
  padding: 0 10px 0 10px;
`;