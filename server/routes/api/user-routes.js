const { getAllUsers } = require('../../controllers/User-controller')

const router = require('express').Router()


router
    .route('/')
    .get(getAllUsers)
    
module.exports = router
    