import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Paper from '../Paper/index';
import Button from '../Button/index';
import { bgColor, btSize } from '../../utils/classNames';
import { itemsCount } from '../../utils/gameFiledChecker';
import { rndPlaces } from '../../data';
import inventoryBag from '../../assets/SVG/charInfo/inventoryBag.svg';
import InvetoryDialog from '../InventoryDialog';
import './index.css';
import Inventory from '../character/inventory';


const FleaMarket = ({items, children, inventoryHolder }) => {
  const setModal = useStoreActions(actions => actions.gameUi.setModal)
  const { modalState } = useStoreState(store => store.gameUi)
  const {buyItems, gameNav } = useStoreActions(actions => actions.user)
  const { gameLocation, inventory } = useStoreState(store => store.user)

  const marketNav = (e) => {
    e.preventDefault();
    gameNav(e.target.value)
  }

  return (
    <div>
      <InvetoryDialog body={<Inventory items={inventory.items} size={inventory.size}/>} />
      <Paper bg={bgColor.primary}>
        <div className='market_header'>
        <h2 style={{marginLeft: 20}}>FleaMarket</h2>
        <div
          onClick={() => setModal(!modalState.isOpen)}
          className='market_header_invent'>
            <img src={inventoryBag} />&nbsp;{itemsCount(inventory.items)} / {inventoryHolder}
        </div>
        <div>
          {/* TODO Update store item prices on gameLocaiton change */}
          <select onChange={(e) => marketNav(e)} value={gameLocation ? gameLocation.name : 'wtf? '}>
            {rndPlaces.map(place => (
              <option key={place.id} value={place.name}>{place.name}</option>
            ))}
          </select>
        </div>
        </div>
        <div className='market-items-list-root'>
          <div className='market-items-box'>
            {items.map(item => (
              <div key={item.id}>
                {item.name} {item.value}&nbsp;
              <Button
                bg={bgColor.info}
                size={btSize.small}
                onClick={() => buyItems({id: item.id, name: item.name, count: 1, price: item.value},)}>
                buy
              </Button>
              </div>
            ))}
          </div>
        </div>
        {children}
      </Paper>
    </div>
   );
}
 
export default FleaMarket;