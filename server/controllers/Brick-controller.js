const Brick = require("../models/Brick");

const brickController = {
    getAllBrick (req, res)
    {
        Brick.find({})
            .then(dbBrickData => res.json(dbBrickData))
            .catch(err =>
            {
            console.log(err);
            res.status(400).json(err)
        })
    }
}
module.exports = brickController