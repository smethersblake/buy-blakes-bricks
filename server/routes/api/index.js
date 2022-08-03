const router = require('express').Router()
const brickRoutes = require('./brick-routes')


router.use('/bricks', brickRoutes)
router.use((req, res) =>
{
    res.status(404).send('ERROR')
})

module.exports = router
