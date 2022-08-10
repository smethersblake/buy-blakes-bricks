import { gql } from "@apollo/client";

// Get Bricks
export const QUERY_GET_BRICKS = gql`
  query getBricks($name: String) {
    getBricks(name: $name) {
      _id: ID
      part_num: Int
      name: String
      part_cat_id: Int
      part_url: String
      part_img_url: String
      quantity: Int
      price: Float
      print_of: String
      color_id: Int
      color_name: String
      rgb: String
      is_trans: Boolean
      purchaseQuantity: Int
    }
  }
`;

// Categories
export const QUERY_CATEGORIES = gql`
  {
    getCategories {
      id
      name
    }
  }
`;

// Bricks
export const QUERY_BRICKS = gql`
  query ($getCategoriesId: Int) {
    getCategories(id: $getCategoriesId) {
      name
      id
    }
    getBricks {
      _id
      part_num
      name
      part_cat_id
      part_url
      part_img_url
      quantity
      price
      color_id
      color_name
      rgb
      is_trans
      purchaseQuantity
    }
  }
`;

// Checkout
export const QUERY_CHECKOUT = gql`
  query getCheckout($cart: [ID]!) {
    checkout(cart: $products) {
      session
    }
  }
`;
