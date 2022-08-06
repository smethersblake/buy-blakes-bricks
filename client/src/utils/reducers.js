import { 
    UPDATE_SEARCH_BRICKS
} from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_SEARCH_BRICKS:
            return {
                ...state,
                getBricks: [...action.getBricks]
            };
        default:
            return state;
    }
};

export function useBrickReducer(initialState) {
    return useReducer(reducer, initialState)
}