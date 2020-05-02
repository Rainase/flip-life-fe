import React from 'react';
import { checkBgColor, checkBtnSize } from '../../utils/cssColorChecker';
import './index.css';
const Button = ({ children, onClick, bg, size }) => {
  return ( 
  <button onClick={onClick} className={`button_root ${checkBtnSize(size)} ${checkBgColor(bg)}`}>{children}</button>
   );
}
 
export default Button;