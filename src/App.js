import React, { useGlobal } from 'reactn';
import './App.css';
import FleaMarket from './components/fleaMarket';
import CharMainInfo from './components/character/mainInfo';
import Inventory from './components/character/inventory';
import { useStoreState } from 'easy-peasy';
import GameNav from './components/GameNav';
import GameField from './components/GameField';
import { subPlaces } from './utils/gameFiledChecker';

function App() {
  const user = useStoreState(store => store.user)
  const [storeItems] =  useGlobal('storeItems')
  const { inventory } = useStoreState(store => store.user)
  const { location } = useStoreState(store => store.user);
  return (
    <div className="flip-life">
      <CharMainInfo charInfo={user}/>
      <GameNav />
      <GameField>
      {location.subName === subPlaces.fleaMarket && (
        <FleaMarket items={storeItems}>
          <Inventory items={user.inventory.items} size={inventory.size}/>
        </FleaMarket>)}
      </GameField>

    </div>
  );
}

export default App;
