import React from 'react';
import { useStoreActions } from 'easy-peasy';
import { bgColor, btSize } from '../../utils/classNames';
import './inventory.css';
import inventoryBag from '../../assets/SVG/charInfo/inventoryBag.svg';
import Button from '../Button';

const Inventory = ({items, size}) => {
  const sellItem = useStoreActions(actions => actions.user.sellItems)
  if(!items) return (
    <div>Inventory data is missing !</div>
  )
  const itemsCount = () => {
    let itemCount = items.reduce((a, b) => a + (b.count || 0), 0)
    return itemCount
  }
  return ( 
      <div className='invetory_root'>
        <div className='invetory_header'>
          <img src={inventoryBag} />
          <div>Bag size: {itemsCount()}&nbsp;/&nbsp;{size}</div>
        </div>
        <div className='invetory_items_root'>
          {
          items.length > 0 ? items.map(item => 
            <div key={item.id} className='invetory_item'>
              {item.name} {item.count ? item.count : ''}&nbsp;
              <Button
                size={btSize.small}
                bg={bgColor.secondary}
                onClick={() => sellItem({name:item.name, price: item.price})}>
                sell
              </Button>
            </div>
            
          ) : 'Nothing in the bag'
          }
        </div>
    </div>
   );
}
 
export default Inventory;