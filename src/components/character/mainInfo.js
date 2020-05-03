import React from 'react';
import cash from '../../assets/SVG/charInfo/cash.svg';
import cc from '../../assets/SVG/charInfo/cc.svg';
import locationMarker from '../../assets/SVG/charInfo/locationMarker.svg';

import './mainInfo.css';

const CharMainInfo = ({charInfo}) => {
  return ( 
    <div className='mainInfo_root'>
        <div className='maintInfo_item'>{charInfo.name}&nbsp;&nbsp;<img alt='current location' src={locationMarker} />&nbsp;&nbsp;{charInfo.location.name}&nbsp;&nbsp;Level: {charInfo.lvl}&nbsp;&nbsp;<img alt='cash' src={cash}/>&nbsp;{charInfo.cash}&nbsp;&nbsp;<img alt='inBank' src={cc} />&nbsp;{charInfo.in_bank}&nbsp;&nbsp;Rep: {charInfo.reputation}</div>
    </div>
   );
}
 
export default CharMainInfo;