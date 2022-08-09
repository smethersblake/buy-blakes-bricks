import React, { createContext, useContext } from 'react';
import { useBrickReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props}) => {
    const [state, dispatch ] = useBrickReducer({
        getBricks: [],
        currentSearch: '',
        getCategories: [],
        cart: []
    });
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };