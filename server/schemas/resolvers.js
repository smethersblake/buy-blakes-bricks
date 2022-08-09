const { AuthenticationError } = require('apollo-server-express')
const {  Brick, Color, Category, Cart, User } = require('../models')
const { findOne } = require('../models/Color')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        
        getBricks: async (parent, args) =>
        {
            return Brick.find(args)
        },
        getOneBrick: async (parent, args) =>
        {
            return Brick.findOne(args)
        },

        getColors: async (parent, args) =>
        {
            return Color.find(args)
        },
        getCategories: async (parent, args) =>
        {
            return Category.find(args)
        },
        getAllCarts: async () =>
        {
            return Cart.find()
        }
    },
    Mutation: {
        addUser: async (parent, args, context) =>
        {
            const user = await User.create(args);
            const cart = await Cart.create(args)
            
            const token = signToken(user);

            return { token, user, cart };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.password;
            // const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
                return { token, user };
        },
        removeBrickFromInv: async (parent, args) =>
        {
            const brick = await Brick.findOneAndUpdate(
                { _id: args._id },
                { $set: { quantity: args.brickQuantity } },
                { new: true }
                )
                return brick
        }
    }
    }

module.exports = resolvers;
