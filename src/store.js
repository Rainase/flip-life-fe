import { configureStore } from '@reduxjs/toolkit';
import reducer from './store/marketItems';

export default function()  {
  return configureStore({ reducer })
}

