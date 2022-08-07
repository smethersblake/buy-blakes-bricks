import { 
    UPDATE_SEARCH_BRICKS,
    UPDATE_CURRENT_SEARCH,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_BRICKS
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
        case UPDATE_BRICKS:
            return {
                ...state,
                getBricks: [...action.getBricks],
            };
        default:
            return state;
    }
};

// export function useBrickReducer(initialState) {
//     return useReducer(reducer, initialState)
// import { useReducer } from "react";
// import {
//   UPDATE_PRODUCTS,
//   ADD_TO_CART,
//   UPDATE_CART_QUANTITY,
//   REMOVE_FROM_CART,
//   ADD_MULTIPLE_TO_CART,
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
//   CLEAR_CART,
//   TOGGLE_CART
// } from "./actions";

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case UPDATE_PRODUCTS:
//       return {
//         ...state,
//         products: [...action.products],
//       };

//     case ADD_TO_CART:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: [...state.cart, action.product],
//       };

//     case ADD_MULTIPLE_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, ...action.products],
//       };

//     case UPDATE_CART_QUANTITY:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: state.cart.map(product => {
//           if (action._id === product._id) {
//             product.purchaseQuantity = action.purchaseQuantity
//           }
//           return product
//         })
//       };

//     case REMOVE_FROM_CART:
//       let newState = state.cart.filter(product => {
//         return product._id !== action._id;
//       });

//       return {
//         ...state,
//         cartOpen: newState.length > 0,
//         cart: newState
//       };

//     case CLEAR_CART:
//       return {
//         ...state,
//         cartOpen: false,
//         cart: []
//       };

//     case TOGGLE_CART:
//       return {
//         ...state,
//         cartOpen: !state.cartOpen
//       };

//     case UPDATE_CATEGORIES:
//       return {
//         ...state,
//         categories: [...action.categories],
//       };

//     case UPDATE_CURRENT_CATEGORY:
//       return {
//         ...state,
//         currentCategory: action.currentCategory
//       }

//     default:
//       return state;
//   }
// };

export function useBrickReducer(initialState) {
  return useReducer(reducer, initialState)
}