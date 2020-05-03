import React, {useEffect } from 'react';

import Paper from '../Paper/index';
import { useStoreState } from 'easy-peasy';
import GameFieldOptions from '../GameFieldOptions/index';
import { bgColor } from '../../utils/classNames';

const GameField = ({children}) => {
  const { location } = useStoreState(store => store.user)
  
  const renderGameField = (place) => {
    console.log(place)
  }

  useEffect(() => {
    renderGameField(location)
  }, [location])
  return ( 
    <Paper bg={bgColor.primary}>
      <GameFieldOptions />
      {children}
    </Paper>
   );
}
 
export default GameField;