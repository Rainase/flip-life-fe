import React, { useGlobal } from 'reactn';
import { useStoreActions } from 'easy-peasy';
import './index.css';
import Paper from '../Paper/index';
import Button from '../Button/index';
import { bgColor, btSize } from '../../utils/classNames';
const FleaMarket = ({items, children }) => {
  const [character, setCharacter] = useGlobal('character');
  const buyItems = useStoreActions(actions => actions.user.buyItems)

  return (
    <div>
      <Paper bg={bgColor.primary}>
      <h2 style={{marginLeft: 20}}>FleaMarket</h2>
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