const faker = require('faker');
let totalItems = 20;
export const storeItems = [];
for (let i = 0; i < totalItems; i ++ ){
  const items = {
    id: faker.random.uuid(),
    name: faker.commerce.product(),
    value: faker.commerce.price()
  }
  storeItems.push(items);
}

export const rndPlaces = [
  { id: faker.random.uuid(), name: 'Witchfield'},
  { id: faker.random.uuid(), name: 'Janwall'},
  { id: faker.random.uuid(), name: 'Stoneness'},
  { id: faker.random.uuid(), name: 'Estermount'},
  { id: faker.random.uuid(), name: 'Goldsnow'},
  { id: faker.random.uuid(), name: 'Aelbarrow'}
]