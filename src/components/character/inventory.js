import React from 'react';
import { useStoreActions } from 'easy-peasy';
import { bgColor } from '../../utils/classNames';
import './inventory.css';
import Paper from '../Paper';

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
    <Paper bg={bgColor.secondary}>
      <p>Bag size: {itemsCount()}/{size}</p>
      {
      items.length > 0 ? items.map(item => 
        <>
        <li>{item.name} {item.count ? item.count : ''}<button onClick={() => sellItem({name:item.name, price: item.price})}>sell</button></li>
        </>
      ) : 'Nothing in the bag'
      }
    </Paper>
   );
}
 
export default Inventory;