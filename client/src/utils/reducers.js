import {
  UPDATE_SEARCH_BRICKS,
  UPDATE_CURRENT_SEARCH,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  UPDATE_BRICKS,
  ADD_MULTIPLE_TO_CART,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  CLEAR_CART,
  // TOGGLE_CART
} from "./actions";
import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_BRICKS:
      return {
        ...state,
        getBricks: [...action.getBricks],
      };
    case UPDATE_CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: action.currentSearch,
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        getCategories: [...action.getCategories],
      };
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    case UPDATE_BRICKS:
      return {
        ...state,
        getBricks: [...action.getBricks],
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.getBricks],
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.getBricks],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((bricks) => {
          if (action._id === bricks._id) {
            bricks.purchaseQuantity = action.purchaseQuantity;
          }
          return bricks;
        }),
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((brick) => {
        return brick._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    // case TOGGLE_CART:
    // return {
    //     ...state,
    //     cartOpen: !state.cartOpen
    // };
    default:
      return state;
  }
};
export function useBrickReducer(initialState) {
  return useReducer(reducer, initialState);
}
