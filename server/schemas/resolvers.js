const { AuthenticationError } = require('apollo-server-express')
const {  Brick, Color, Category, Cart, User } = require('../models')
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
        createCart: async (parent, args, context) =>
        {
                const user = await User.findByIdAndUpdate(
                    {_id: args.id },
                    { $set: {cartId: args.id2}})
            return user
        },
        addToCart: async (parent, args, context) =>
        {
            const cart = await Cart.findByIdAndRemove(
                { _id: args.id },
                {$Set: {brickId: args.brickId}}
            )
        }
    }
    
        // createCart: async (parent, args, context) =>
        // {
        //     if (context.user)
        //     {
        //         const cart = await Cart.create({ ...args, username: context.user.username})
        //         await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             { $push: {carts: cart._id}}
        //         )
        //     }
        //     return cart
        // }
        // addToCart: async (parent, { brickId }, context) =>
        // {
        //     if (context.cart)
        //     {
        //         const updatedCart = await Cart.create(
        //             { _id: cart._id },
        //             { $addToSet: { bricks: brickId } },
        //             {new: true}
        //         ).populate('bricks')
        //         return updatedCart
        //     }
        // }
    }



module.exports = resolvers;