const { getAllBrick, getBrickByPartNumber, getBrickByColor, getBrickByCategory } = require('../../controllers/Brick-controller')

const router = require('express').Router()

router
    .route('/')
    .get(getAllBrick)

router
    .route('/part_num/:part_num')
    .get(getBrickByPartNumber)

router
    .route('/color')
    .get(getBrickByColor)

router
    .route('/category/:name')
    .get(getBrickByCategory)

    module.exports = router
    