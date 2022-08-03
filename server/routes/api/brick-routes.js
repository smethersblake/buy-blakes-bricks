const { getAllBrick } = require('../../controllers/Brick-controller')

const router = require('express').Router()

router
    .route('/')
    .get(getAllBrick)



    module.exports = router
    