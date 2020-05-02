import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import './index.css';
import { bgColor } from '../../utils/classNames';
import Paper from '../Paper';

const GameFieldOptions = ({ children }) => {
  const { entities } = useStoreState(store => store.navOptions);
  const { location } = useStoreState(store => store.user);
  const subNav = useStoreActions(actions => actions.user.subNav)

  const subLinks = () => entities.filter(entity => {
    let currentPlace = location.id;
    return entity.placeId === currentPlace;
  })
  
  useEffect(() => {
    subLinks()
  },[location])
  return ( 
    <Paper bg={bgColor.primary}>
    <div className='field_options_root'>
      {subLinks().map(link => (
        <div key={link.id} className='field_option_item'
          onClick={() => subNav({subPlaceId: link.id, subName: link.name})}>
          <img src={require(`../../assets/SVG/subNav/${link.id}.svg`)} />
          <div className='field_option_title' style=
          {link.id === location.subPlaceId ?
            {fontWeight: 900} :
            {fontWeight: 400}}
          >
              {link.name}
          </div>
        </div>
      ))}
      {children}
    </div>
    </Paper>
   );
}
 
export default GameFieldOptions;