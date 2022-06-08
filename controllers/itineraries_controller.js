const express = require('express')
const router = express.Router()

const Itinerary = require('../models/itinerary')

router.get('/:tripId', (req, res) => {
  const tripId = req.params.tripId
  //grabing the tripId from the path and passing for the findForTrip

  Itinerary.findForTrip(tripId)
    .then(itineraries => res.json(itineraries))
})

//getting the tripId from the fetch request from add_itinerary.js
router.post('/:tripId', (req, res) => {
  const { start_location, end_location, start_date, end_date, start_time, end_time, activities, notes, checklist } = req.body

  const tripId = req.params.tripId //getting the tripId from the path

  //grabbing the model from line 4 and creating the itinerary
  Itinerary
    .create(start_location, end_location, start_date, end_date, start_time, end_time, activities, notes, checklist, tripId)
    .then(itinerary => res.json(itinerary))
})
//.then sending the  data back as json to the fron-end (add_itinerary.js)
module.exports = router