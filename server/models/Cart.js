const {Schema, model} = require('mongoose')

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    bricks: [
        {
            brickId: {
                type: Schema.Types.ObjectId,
                ref: "Brick"
            }
        }
    ]
})
const Cart = model('Cart', cartSchema)

module.exports = Cart
