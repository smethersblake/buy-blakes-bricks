const { Schema, model } = require('mongoose')

const brickSchema = new Schema({
    part_num: {
        type: Number,
        required: true,
        unique: false
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    part_cat_id: {
        type: Number,
        required: false
    },
    part_url: {
        type: String,
        required: false
    },
    part_img_url: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    print_of: {
        type: String,
        default: null,
        required: false
    },
    color: {
        type: Schema.Types.Mixed,
    }
})

const Brick = model('Brick', brickSchema)

module.exports = Brick