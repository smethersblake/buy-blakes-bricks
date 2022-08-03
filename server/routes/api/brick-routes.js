const router = require('express').Router()

// TEST For Brick controller to make sure app is connected to mongoDB Atlas //


const Brick = require("../../models/Brick");
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

}


router
    .route('/')
    .get(brickController.getAllBrick)



    module.exports = router
    