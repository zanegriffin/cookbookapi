const express = require('express')
const router = express.Router()

// Require the Cookbook controller. ##Was this supposed to say model instead of controller??
const Cookbook = require('../models/Cookbook')

// Write the route to list all cookbooks
router.get('/', async (req, res) => {
    let cookbooks = await Cookbook.find({})
    res.json({status: 200, data: cookbooks})
})
// Write the route to get cookbook by title
router.get('/:title', async (req, res) => {
    let cookbook = await Cookbook.find({title: req.params.title})
    res.json({status: 200, data: cookbook})
})

// Write the route to get cookbook by year published
router.get('/:year', async (req, res) => {
    let cookbook = await Cookbook.find({year: req.params.year})
    res.json({status: 200, data: cookbook})
})

// Write the route to create a cookbook
router.post('/', async (req, res) => {
    let cookbook = await Cookbook.create(req.body)
    res.json({status: 200, data: cookbook})
})

// Write the route to update a cookbook
router.put('/:title', async (req, res) => {
    let cookbook = await Cookbook.findOneAndUpdate({title: req.params.title}, req.body, {new: true})
    res.json({status: 200, data: cookbook})
})

// Write the route to delete the cookbook by title
router.delete('/:title', async (req, res) => {
    let cookbook = await Cookbook.findOneAndDelete({title: req.params.title})
    res.json({status: 200, cookbook})
})


module.exports = router;