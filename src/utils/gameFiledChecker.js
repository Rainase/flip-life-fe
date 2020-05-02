import { useStoreState } from 'easy-peasy';

export const subPlaces = {
fleaMarket: "Flea market",
policeStn: "Police station"
}

const GameField = () => {
  const { location } = useStoreState(store => store.user);
  const { places } = useStoreState(store => store.locations);

}