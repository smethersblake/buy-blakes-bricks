const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        cart: Cart
    }

    type Color {
        _id: ID
        id type: Int
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
        price: Int
        print_of: String
        color: Color
    }
    
    type Category {
        _id: ID
        id: Int
        name: String
        part_count: int
    }
    
    type Cart {
        _id: ID
        bricks:[Brick]
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        getAllBricks: [Brick]
        getAllColors: [Color]
        getAllCategories: [Category]
        getAllUser: [User]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
    }`
