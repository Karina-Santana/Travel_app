const express = require('express')
const router = express.Router()

const Itinerary = require('../models/itinerary')

router.get('/', (req, res) => {
  Itinerary.findAll()
  .then(itineraries => res.json(itineraries))
})

router.post('/', (req, res) => {
  const {start_location, end_location, start_date, end_date, start_time, end_time, activities, notes, checklist} = req.body
  Itinerary
  .create(start_location, end_location, start_date, end_date, start_time, end_time, activities, notes, checklist)
  .then(itinerary => res.json(itinerary))
})

module.exports = router