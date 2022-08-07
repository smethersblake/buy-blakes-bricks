import { 
    UPDATE_SEARCH_BRICKS,
    UPDATE_CURRENT_SEARCH,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from './actions';
import { useReducer } from 'react';


export const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_SEARCH_BRICKS:
            return {
                ...state,
                getBricks: [...action.getBricks]
            };
        case UPDATE_CURRENT_SEARCH:
            return {
                ...state,
                currentSearch: action.currentSearch
            };
        case UPDATE_CATEGORIES:
            return {
                ...state,
                getCategories: [...action.getCategories]
            }
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        default:
            return state;
    }
};

export function useBrickReducer(initialState) {
    return useReducer(reducer, initialState)
}