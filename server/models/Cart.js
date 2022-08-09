const {Schema, model} = require('mongoose')

const cartSchema = new Schema({
    email: {
        type: String
    },
    bricks: [
        {
            type: Schema.Types.Object,
            ref: "Brick"
        }
    ]
})
const Cart = model('Cart', cartSchema)

module.exports = Cart
