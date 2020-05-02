import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import { StoreProvider, createStore } from "easy-peasy";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { storeItems } from './data';
import model from './models';

const store = createStore(model);

const DEFAULT_GLOBAL_STATE = {
  storeItems: storeItems,
  character: {
    name: 'Rain',
    lvl: 1,
    reputation: 43563,
    cash: 40000,
    in_bank: 1245,
    age: 21,
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
    }]
  },
  modalToggle: {
    isOpen: false
  }
}
setGlobal(DEFAULT_GLOBAL_STATE)
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
    <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
