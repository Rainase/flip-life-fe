import { action, thunk, computed } from "easy-peasy";
import mockService from "../mockService";

export default {
    name: 'Rain',
    lvl: 1,
    reputation: 43563,
    cash: 4000,
    in_bank: 1245,
    age: 21,
    location: {name:'Home', id:3, subPlaceId: 5, subName: 'Dumbster'},
    gameLocation: {
      name: 'Witchfield',
    },
    inventory: {
      size: 14,
      items: []
    },
    skills: [{
      math: [{
        lvl: 3,
        xp: 123,
      }],
      speed: [{
        lvl: 5,
        xp: 567
      }]
    }],

  buyItems: action((state, newItem) => {
    if(newItem.price > state.cash) return alert('Not enough money')
    let itemIndex;
    let newBalance = state.cash - newItem.price;
    itemIndex = state.inventory.items.findIndex(
      item => item.name === newItem.name)
      if(itemIndex < 0){
        state.inventory.items.push(newItem);
        state.cash = newBalance
      }
      else {
        state.inventory.items[itemIndex].count++
        state.cash = newBalance
    }
  }),
  sellItems: action((state, ItemToSell) => {
    let itemIndex;
    let newBalance;
    itemIndex = state.inventory.items.findIndex(
      item => item.name === ItemToSell.name)
      if(state.inventory.items[itemIndex].count > 1) {
        newBalance = state.cash + parseInt(ItemToSell.price);
        state.inventory.items[itemIndex].count--
      } else {
        state.inventory.items.splice(itemIndex, 1)
        newBalance = state.cash + parseInt(ItemToSell.price);
      }
    state.cash = newBalance
  }),
  navigate: action((state, navigateTo) => {
    state.location = navigateTo
  }),
  subNav: action((state, subPlace) => {
    state.location.subPlaceId = subPlace.subPlaceId
    state.location.subName = subPlace.subName
  }),
  gameNav: action((gameLoc, newGameLoc) => {
    gameLoc.gameLocation = newGameLoc;
  })
}
