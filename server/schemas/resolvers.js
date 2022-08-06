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
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
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
        addToCart: async (parent, args, context) =>
        {
            // const user = await User.findOne({ cart_id: context.user.cart_id })
            const brick = await Brick.findOne({ _id: args.brickId })
            const cart = await Cart.findOneAndUpdate(
                { _id: args._id },
                { $addToSet: { bricks: brick } }
                    ).populate('cart')
            
                return cart
        }
    }
    }

module.exports = resolvers;
