import React from 'react';
import * as helper from '../../../util/summaryHelpers';

const GameInfo = ({ gameInfo, away_sname, home_sname }) => {

  const listGameInfoData = () => {
    const textData = helper.parseTextData(gameInfo, ['WP', 'HBP', 'Inherited runners-scored', 'Umpires', 'T', 'Att'])
    return helper.createDisplayElements([textData])
  }

  return (
    <div style={{margin: "2px 0 0 0"}}>
      {listGameInfoData()}      
    </div>
  )
}

export default GameInfo;