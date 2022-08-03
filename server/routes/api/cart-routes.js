const { getAllCarts } = require('../../controllers/Cart-controller')

const router = require('express').Router()


router
    .route('/')
    .get(getAllCarts)
    
    module.exports = router