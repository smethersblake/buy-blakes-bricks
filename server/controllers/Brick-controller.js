const Brick = require("../models/Brick");
const Category = require('../models/Category')

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
    getBrickByPartNumber (req, res)
    {
        Brick.find({part_num: req.params.part_num}).then(dbBrickData => res.json(dbBrickData))
            .catch(err =>
            {
            console.log(err);
            res.status(400).json(err)
        })
    },
    getBrickByColor (req, res)
    {
        Brick.find({'color.name': "Red"}).then(dbBrickData => res.json(dbBrickData))
            .catch(err =>
            {
            console.log(err);
            res.status(400).json(err)
        })
    },
    getBrickByCategory (req, res)
    {
        Category.findOne({ name: req.params.name })
            .then(dbBrickData => Brick.find({ part_cat_id: dbBrickData.id }))
        .then(dbBrickData => res.json(dbBrickData))
            .catch(err =>
            {
            console.log(err);
            res.status(400).json(err)
        })
    }
}
module.exports = brickController