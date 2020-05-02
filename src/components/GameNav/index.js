import React from 'react';
import Paper from '../Paper';
import { bgColor } from '../../utils/classNames';
import { useStoreState, useStoreActions } from 'easy-peasy';
import './index.css';
const GameNav = () => {
  const {places, entities } = useStoreState(navs => navs.navOptions)
  const navigate = useStoreActions(actions => actions.user.navigate)

  return (
    <Paper bg={bgColor.primary}>
      <div className='game_nav_root'>
        {places.map(place => (
            <div className='game_nav_item' key={place.id} onClick={() => navigate({name:place.name, id:place.id, subPlaceId: 1})}>{place.name}</div>
        ))}
      </div>
    </Paper>
   );
}
 
export default GameNav;