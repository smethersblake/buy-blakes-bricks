const { getAllColor } = require('../../controllers/Color-controller')

const router = require('express').Router()

router
    .route('/')
    .get(getAllColor)

module.exports = router
    