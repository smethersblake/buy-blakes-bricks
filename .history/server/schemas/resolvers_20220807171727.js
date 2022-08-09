const { AuthenticationError } = require("apollo-server-express");
const { Brick, Color, Category, Cart, User } = require("../models");
const { findOne } = require("../models/Color");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    getBricks: async (parent, args) => {
      return Brick.find(args);
    },
    getOneBrick: async (parent, args) => {
      return Brick.findOne(args);
    },

    getColors: async (parent, args) => {
      return Color.find(args);
    },
    getCategories: async (parent, args) => {
      return Category.find(args);
    },
    getAllCarts: async () => {
      return Cart.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.password;
      // const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addToCart: async (parent, args, context) => {
      // need to update to context.user.cart_id for cart id
      const brick = await Brick.findOne({ _id: args.brickId });
      const cart = await Cart.findOneAndUpdate(
        { _id: args._id },
        { $addToSet: { bricks: brick } }
      );

      return cart;
    },
    checkout: async (parent, args, context) => {
      const order = new Order({ products: args.products });
      const { products } = await order.populate("products");
      const line_items = [];

      for (let i = 0; i < products.length; i++) {
        // generate product id
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
        });

        // generate price id using the product id
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        // add price id to the line items array
        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }
    },
  },
};

module.exports = resolvers;
