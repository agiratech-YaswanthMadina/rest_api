const express = require('express')

const router = express.Router()

const subscriber = require('../models/subscriber')

//get all
router.get('/', async (req, res) => {
    try{
        const subscribers = await subscriber.find()
        res.json(subscribers)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//get one
router.get('/:id', (req, res) => {
    res.send(req.params.id)

})

//create one 
router.post('/', (req, res) => {
    
})

//update one
router.patch('/:id', (req, res) => {
    
})

//delete one
router.delete('/:id', (req, res) => {
    
})

module.exports = router