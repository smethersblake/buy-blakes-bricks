const { getAllCategories } = require('../../controllers/Category-controller')

const router = require('express').Router()

router
    .route('/')
    .get(getAllCategories)

    module.exports = router
    