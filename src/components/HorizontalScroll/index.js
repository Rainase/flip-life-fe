import React from 'react';
import './index.css';

const HorizontalScroll = ( {children} ) => {
  return ( 
    <div className='hor_scroll_root'>
      {children}
    </div>
   );
}
 
export default HorizontalScroll;