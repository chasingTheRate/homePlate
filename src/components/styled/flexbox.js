import styled from 'styled-components';

export default styled.div`
  display: flex;
  height: 100%;
  overflow: ${props => props.overflow || 'hidden'};
  padding: ${props => props.padding || '0'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  flex-grow: ${props => props.flexGrow || 0 };
  flex-direction: ${props => props.flexDirection || 'row' };
  margin: ${props => props.margin || '0' };
  flex-wrap: ${props => props.flexWrap || 'nowrap' };
  align-items: ${props => props.alignItems || 'stretch' };
  align-content: ${props => props.alignContent || 'stretch' };
  background-color: ${props => props.backgroundColor || '' };
  font-size: ${props => props.fontSize || '' };
  font-family: ${props => props.fontFamily || '' };
  color: ${props => props.color || ''};
`;