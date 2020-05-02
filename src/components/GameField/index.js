import React, {useEffect } from 'react';

import Paper from '../Paper/index';
import { useStoreState } from 'easy-peasy';
import GameFieldOptions from '../GameFieldOptions/index';

const GameField = ({children}) => {
  const { location } = useStoreState(store => store.user)
  
  const renderGameField = (place) => {
    console.log(place)
  }

  useEffect(() => {
    renderGameField(location)
  }, [location])
  return ( 
    <Paper>
      <GameFieldOptions />
      {children}
    </Paper>
   );
}
 
export default GameField;