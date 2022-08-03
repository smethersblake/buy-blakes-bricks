const Brick = require("../server/models/Brick");

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
    },
    addBrick ({body}, res)
    {
        Brick.create(body)
        .then(dbBrickData => res.json(dbBrickData))
        .catch(err => res.status(400).json(err))
    }
}
module.exports = brickController