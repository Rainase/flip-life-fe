import { action, thunk, computed } from "easy-peasy";

export default {
  places: [
    {id: 1, name: 'Street'},
    {id: 2, name: 'Slum'},
    {id: 3, name: 'Home'}
  ],
  entities: [
    {id: 1, placeId: 1, name: 'Flea market'},
    {id: 2, placeId: 1, name: 'Police station'},
    // {id: 3, placeId: 2, name: 'Slum place'},
    {id: 4, placeId: 1, name: 'Restaurant'},
    {id: 5, placeId: 3, name: 'Dumbster'},
  ]
}