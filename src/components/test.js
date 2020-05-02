import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {itemAdded } from '../store/marketItems';
import storeConf from '../store';
const Test = () => {
  const store = storeConf();
  const dispatch = useDispatch();
  const add = () => {
    itemAdded({description: 'sfdddf'})
    // dispatch(itemAdded({descrition:'leelo'}))
    // console.log(dispatch)
  }
  useEffect(() => {
    dispatch(itemAdded({descrition:'leelo'}))
    // dispatch(itemAdded({description: 'lllll'}, 'test'))
    // itemAdded({description: 'sfdddf'})
  }, [])
  
  // console.log(dispatch(store.getState()))
  return ( 
    <>
    <h1>test</h1>
    <button onClick={add()}>add</button>
    </>
   );
}
 
export default Test;