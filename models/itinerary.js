const db = require("../db/db")

const Itinerary = {
  findAll: () => {
    const sql = 'SELECT * FROM itineraries'
    return db
    .query(sql)
    .then(dbRes => dbRes.rows)
  },

  create: (start_location, end_location, start_date, end_date, start_time, end_time, activities, notes, checklist) => {
    const sql = `
    INSERT INTO itineraries(start_location, end_location, start_date, end_date, start_time, end_time, activities, notes, checklist) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
    `
    return db.query(sql, [start_location, end_location, start_date, end_date, start_time, end_time, activities, notes, checklist])
    .then(dbRes => dbRes.rows[0])
  }
}

module.exports = Itinerary