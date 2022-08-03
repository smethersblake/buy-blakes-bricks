const Color = require('../models/Color')

const colorController = {
    getAllColor (req, res)
    {
        Color.find({}).then(dbColorData => res.json(dbColorData))
            .catch(err =>
            {
            console.log(err);
            res.status(400).json(err)
        })
    },
    addColor ({ body }, res)
    {
        Color.create(body).then(dbColorData => res.json(dbColorData))
            .catch(err =>
            {
            console.log(err);
            res.status(400).json(err)
        })
    }
}

module.exports = colorController