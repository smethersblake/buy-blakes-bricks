const User = require('../models/User')

const userController = {
    getAllUsers (req, res)
    {
        User.find({}).then(dbColorData => res.json(dbColorData))
            .catch(err =>
            {
            console.log(err);
            res.status(400).json(err)
        })
    }
}
module.exports = userController