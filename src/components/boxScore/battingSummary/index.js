import React from 'react';
import * as helper from '../../../util/summaryHelpers';
import styled from 'styled-components';
import config from '../../../../config';

const BatStatTH = styled.th`
  text-align: ${props => props.textAlign || 'right'};
  width: ${props => props.width || '9%'};
`;

const tableStyle = {
  width:"100%",
  borderCollapse:"collapse",
  margin: "2px 0 0 0"
}

const BattingSummary = ({
  awayBatters,
  homeBatters,
  away_sname,
  home_sname,
  fieldingAndBattingInfo,
}) => {
  
  const getFieldList = (info) => {
    try {
      return info.fieldList;
    } catch (err) {
      return []
    }
  }

  const listTeamBatting = (name, batters, keyName) => {
    return(
      <table style={ tableStyle } key={keyName}>
        <tbody key={keyName}>
        <tr>
          <BatStatTH textAlign={"left"} width='auto'>{name}</BatStatTH>
          <BatStatTH>AB</BatStatTH>
          <BatStatTH>R</BatStatTH>
          <BatStatTH>H</BatStatTH>
          <BatStatTH>BI</BatStatTH>
          <BatStatTH>BB</BatStatTH>
          <BatStatTH>SO</BatStatTH>
          <BatStatTH>AVG</BatStatTH>
        </tr>
        {batters.map((batter, index) => (
          <tr key={index}>
            <td style={{textAlign: "left"}}>{`${batter.name} ${batter.position.toLowerCase()}`}</td>
            <td style={{textAlign: "right"}}>{batter.atBats}</td>
            <td style={{textAlign: "right"}}>{batter.runs}</td>
            <td style={{textAlign: "right"}}>{batter.hits}</td>
            <td style={{textAlign: "right"}}>{batter.rbi}</td>
            <td style={{textAlign: "right"}}>{batter.baseOnBalls}</td>
            <td style={{textAlign: "right"}}>{batter.strikeOuts}</td>
            <td style={{textAlign: "right"}}>{batter.avg}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  };

  const listBattingTextData = (allowedCategories) => {
    const battingFieldList = getFieldList(fieldingAndBattingInfo[0], allowedCategories.batting);
    const baserunningFieldList = getFieldList(fieldingAndBattingInfo[1]);
    const fieldingFieldList = getFieldList(fieldingAndBattingInfo[2]);
    return helper.createDisplayElements([fieldingFieldList, battingFieldList, baserunningFieldList]);
  }

  return (
    <div>
      {listTeamBatting(away_sname, awayBatters, 'awayBatters')}
      {listTeamBatting(home_sname, homeBatters, 'homeBatters')}
      <div style={{margin: "2px 0 0 0"}}>
        { listBattingTextData(config.categories) }
      </div>
    </div>
  )
}

export default BattingSummary;