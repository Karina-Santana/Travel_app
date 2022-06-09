const db = require("../db/db")

const Itinerary = {
  findForTrip: (tripId) => {
    const sql = 'SELECT * FROM itineraries WHERE trip_id = $1'
    //getting all itineraries from that one trip
    return db
      .query(sql, [tripId])
      .then(dbRes => dbRes.rows)
  },

  create: (start_location, end_location, start_date, end_date, start_time, end_time, activities, notes, checklist, tripId) => {
    const sql = `
    INSERT INTO itineraries(start_location, end_location, start_date, end_date, start_time, end_time, activities, notes, checklist, trip_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *
    `

    //entering the itinerary details to the database
    return db.query(sql, [start_location, end_location, start_date, end_date, start_time, end_time, activities, notes, checklist, tripId])
      .then(dbRes => dbRes.rows[0])
  } // then the response comes in an array(dbRes), so we're grabbing the first row and sending back to the front-end
}

module.exports = Itinerary