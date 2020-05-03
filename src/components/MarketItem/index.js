import React from 'react';
import cash from '../../assets/SVG/charInfo/cash.svg';
import dummyImg from '../../assets/SVG/subNav/1.svg';
import './index.css';

const MarketItem = ( {title, price, img, onClick, children} ) => {
  return ( 
    <div className='marketItem_root' onClick={onClick}>
      <div className='item_container'>
        <div className='item_title'>{title}</div>
          <img className='item_img' src={dummyImg} />
        <div className='item_price'>
          <img src={cash} />&nbsp;{price}
        </div>
      </div>
      {children}
    </div>
   );
}
 
export default MarketItem;