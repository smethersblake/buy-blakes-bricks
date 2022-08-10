import React, { createContext, useContext } from "react";
import { useBrickReducer } from "./reducers";
import Auth from "./auth";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useBrickReducer({
    getBricks: [],
    currentSearch: "",
    getCategories: [],
    cart: Auth.getLocalCart(),
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
