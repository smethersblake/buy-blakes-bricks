const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    cartId: Cart
  }
  type Color {
    _id: ID
    id: Int
    name: String
    rgb: String
    is_trans: Boolean
  }
  type Brick {
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
  }

  type Category {
    _id: ID
    id: Int
    name: String
    part_count: Int
  }

  type Cart {
    _id: ID
    cartEmpty: Boolean
    bricks: [Brick]
  }
  type Auth {
    token: ID
    user: User
  }
  type Checkout {
    session: ID
  }
  type Query {
    getOneBrick(id: ID): Brick
    getBricks(
      _id: ID
      name: String
      part_cat_id: Int
      part_img_url: String
      part_num: Int
      price: Float
      quantity: Int
      color_id: Int
    ): [Brick]
    getColors(_id: ID, name: String, rgb: String, is_trans: Boolean): [Color]
    category: Category
    getCategories(_id: ID, id: Int, name: String, part_count: Int): [Category]
    getAllCarts: [Cart]
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createCart(id: String, id2: ID): User
    addToCart(_id: ID, brickId: ID): Cart
  }
`;
module.exports = typeDefs;
