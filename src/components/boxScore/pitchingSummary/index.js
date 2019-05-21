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

const getInningsPitched = (outs) => {
  const style = {
    fontSize: '8px',
  }
  if (outs >= 3 && outs % 3 === 0) {
    return <span>{outs/3}</span>
  } else if (outs < 3 && outs % 3 > 0) {
    return <span style={style}>{`${outs % 3}/3`}</span>
  } else if (outs === 0) {
    return <span>0</span>
  } else {
    return <span>{Math.floor(outs/3)}<span style={style}>{`${outs % 3}/3`}</span></span>
  }
}

const PitchingSummary = ({ pitching, away_sname, home_sname }) => {
  
  const getPitcherNote = (pitcher) => {
    var tag = ''
    if(pitcher.win || pitcher.loss || pitcher.sv != "0") {
      tag = pitcher.note;
    }
    return tag;
  }

  const listTeamPitching = (name, pitchers) => {
    return(
      <table style={tableStyle}>
        <tbody>
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
        {pitchers.map(pitcher => (
          <tr key={pitcher.id}>
            <td style={{textAlign: "left"}}>{`${pitcher.name} ${getPitcherNote(pitcher)}`}</td>
            <td style={{textAlign: "right"}}>{getInningsPitched(parseInt(pitcher.out))}</td>
            <td style={{textAlign: "right"}}>{pitcher.h}</td>
            <td style={{textAlign: "right"}}>{pitcher.er}</td>
            <td style={{textAlign: "right"}}>{pitcher.bb}</td>
            <td style={{textAlign: "right"}}>{pitcher.so}</td>
            <td style={{textAlign: "right"}}>{pitcher.np}</td>
            <td style={{textAlign: "right"}}>{pitcher.era}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  };

  return (
    <div>
      {listTeamPitching(away_sname, pitching[0].pitcher)}
      {listTeamPitching(home_sname, pitching[1].pitcher)}
    </div>
  )
}

export default PitchingSummary;