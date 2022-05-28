const { Router } = require('express')
const router = Router()
const Dish = require('../models/Dish')

router.get('/', async (req, res) => {
    const dishes = await Dish.find({})
    res.json(dishes)
})

module.exports = router