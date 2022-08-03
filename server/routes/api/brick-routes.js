const { getAllBrick, getBrickByPartNumber } = require('../../controllers/Brick-controller')

const router = require('express').Router()

router
    .route('/')
    .get(getAllBrick)

router
    .route('/:part_num')
    .get(getBrickByPartNumber)



    module.exports = router
    