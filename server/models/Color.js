const { Schema, model } = require('mongoose')

const ColorSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    rgb: {
        type: String,
        required: false
    },
    is_trans: {
        type: Boolean,
        required: true
    }
})

const Color = model('Color', ColorSchema)

module.exports = Color