const { Schema, model } = require('mongoose')

const CategorySchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    part_count: {
        type: Number,
        required: false
    }
})

const Category = model ('Category', CategorySchema)

module.exports = Category