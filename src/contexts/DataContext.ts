import { createContext } from 'react';

export const DataContext = createContext<{
  data: DataAPI;
  setData: React.Dispatch<React.SetStateAction<DataAPI>>;
}>({
  data: { isLoaded: false, products: [] },
  setData: () => {},
});
