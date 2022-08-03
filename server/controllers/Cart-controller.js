const Cart = require('../models/Cart')

const cartController = {
    getAllCarts (req, res)
    {
        Cart.find({}).then(dbColorData => res.json(dbColorData))
            .catch(err =>
            {
            console.log(err);
            res.status(400).json(err)
        })
    }
}
module.exports = cartController