import React from 'react';
import * as helper from '../../../util/summaryHelpers';

const GameInfo = ({ gameInfo }) => {

  const listPitchingAndGameInfo = () => {
    let elements = [];
    gameInfo.map( (info, index) => {
      if (index === 0) {
        elements.push(<span key={index}><b> {info.label}: </b>{info.value}</span>)
      } else {
        elements.push(<span key={index}><b> {info.label}: </b>{info.value}</span>)
      }
    })
    return elements;
  }

  return (
    <div style={{margin: "2px 0 0 0"}}>
      {listPitchingAndGameInfo()}      
    </div>
  )
}

export default GameInfo;