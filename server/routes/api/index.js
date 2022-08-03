const router = require('express').Router()
const brickRoutes = require('./brick-routes')
const colorRoutes = require('./color-routes')
const userRoutes = require('./user-routes')
const cartRoutes = require('./cart-routes')
const categoryRoutes = require('./category-routes')


router.use('/bricks', brickRoutes)
router.use('/colors', colorRoutes)
router.use('/users', userRoutes)
router.use('/categories', categoryRoutes)
router.use('/carts', cartRoutes)

router.use((req, res) =>
{
    res.status(404).send('ERROR')
})

module.exports = router
