const Category = require('../models/Category')

const categoryController = {
    getAllCategories (req, res)
    {
        Category.find({}).then(dbColorData => res.json(dbColorData))
            .catch(err =>
            {
            console.log(err);
            res.status(400).json(err)
        })
    }
}

module.exports = categoryController