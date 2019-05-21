import React from 'react';
import styled from 'styled-components';

const PitchStatTH = styled.th`
  text-align: ${props => props.textAlign || 'right'};
  width: ${props => props.width || '9%'};
`;

const tableStyle = {
  width:"100%",
  borderCollapse:"collapse",
  margin: "2px 0 0 0"
}

const getInningsPitched = (innPitchedAsFloatString) => {
  const ipArr = innPitchedAsFloatString.split('.');
  const style = {
    fontSize: '8px',
  }
  let wholeInningsPitched = '';
  let partialInningsPitched = '';

  if (ipArr[0] !== '0') {
    wholeInningsPitched = ipArr[0];
  }

  if (ipArr[1] === '1') {
    partialInningsPitched = '1/3';
  } else if (ipArr[1] === '2') {
    partialInningsPitched = '2/3';
  }

  return <span>{wholeInningsPitched}<span style={style}>{partialInningsPitched}</span></span>;
}

const PitchingSummary = ({ awayPitchers, homePitchers, away_sname, home_sname }) => {
  const getPitcherNote = (pitcher) => {
    var tag = ''
    if(pitcher.win || pitcher.loss || pitcher.sv != "0") {
      tag = pitcher.note;
    }
    return tag;
  }

  const listTeamPitching = (name, pitchers, keyName) => {
    return(
      <table style={tableStyle} key={keyName}>
        <tbody key={keyName}>
        <tr>
          <PitchStatTH textAlign="left" width="auto">{name}</PitchStatTH>
          <PitchStatTH>IP</PitchStatTH>
          <PitchStatTH>H</PitchStatTH>
          <PitchStatTH>ER</PitchStatTH>
          <PitchStatTH>BB</PitchStatTH>
          <PitchStatTH>SO</PitchStatTH>
          <PitchStatTH>NP</PitchStatTH>
          <PitchStatTH>ERA</PitchStatTH>
        </tr>
        {pitchers.map((pitcher, index) => (
          <tr key={index}>
            <td style={{textAlign: "left"}}>{pitcher.name}</td>
            <td style={{textAlign: "right"}}>{getInningsPitched(pitcher.inningsPitched)}</td>
            <td style={{textAlign: "right"}}>{pitcher.hits}</td>
            <td style={{textAlign: "right"}}>{pitcher.earnedRuns}</td>
            <td style={{textAlign: "right"}}>{pitcher.baseOnBalls}</td>
            <td style={{textAlign: "right"}}>{pitcher.strikeOuts}</td>
            <td style={{textAlign: "right"}}>{pitcher.numberOfPitches}</td>
            <td style={{textAlign: "right"}}>{pitcher.era}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  };

  return (
    <div>
      {listTeamPitching(away_sname, awayPitchers, 'awayPitchers')}
      {listTeamPitching(home_sname, homePitchers, 'homePitchers')}
    </div>
  )
}

export default PitchingSummary;