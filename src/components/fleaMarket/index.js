import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Paper from '../Paper/index';
import Button from '../Button/index';
import { bgColor, btSize } from '../../utils/classNames';
import { itemsCount } from '../../utils/gameFiledChecker';
import inventoryBag from '../../assets/SVG/charInfo/inventoryBag.svg';
import InvetoryDialog from '../InventoryDialog';


import './index.css';
import Inventory from '../character/inventory';
const FleaMarket = ({items, children, inventoryHolder }) => {
  const setModal = useStoreActions(actions => actions.gameUi.setModal)
  const { modalState } = useStoreState(store => store.gameUi)
  const buyItems = useStoreActions(actions => actions.user.buyItems)
  const { inventory } = useStoreState(store => store.user)
  return (
    <div>
      <InvetoryDialog body={<Inventory items={inventory.items} />} />
      <Paper bg={bgColor.primary}>
        <div className='market_header'>
      <h2 style={{marginLeft: 20}}>FleaMarket</h2>
  <div onClick={() => setModal(!modalState.isOpen)} className='market_header_invent'><img src={inventoryBag} />&nbsp;{itemsCount(inventory.items)} / {inventoryHolder}</div>
        </div>
        <div className='market-items-list-root'>
          <div className='market-items-box'>
            {items.map(item => (
              <div key={item.id}>
                {item.name} {item.value}&nbsp;
              <Button
                bg={bgColor.info}
                size={btSize.small}
                onClick={() => buyItems({name: item.name, count: 1, price: item.value},)}>
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