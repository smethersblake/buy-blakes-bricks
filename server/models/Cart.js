const {Schema, model} = require('mongoose')

const cartSchema = new Schema({
    cartEmpty: {
        type: Boolean,
        default: true
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
