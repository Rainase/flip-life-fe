import React from 'react';
import './index.css';
import { checkBgColor } from '../../utils/cssColorChecker';
const Paper = ({ bg, children }) => {
  
  return (
  <div className={`paper_root ${checkBgColor(bg)}`}>
    {children}
  </div> );
}
 
export default Paper;