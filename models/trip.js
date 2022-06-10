const db = require("../db/db")

const Trip = {
  findAll: (id) => { 
    const sql = 'SELECT * FROM trips WHERE user_id = $1'

    return db 
    .query(sql, [id])
    .then(dbRES => dbRES.rows)
  }, 

  create: (user_id, name, start_date, end_date, image_url) => {
    const sql = `
    INSERT INTO trips(user_id, name, start_date, end_date, image_url) VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `
    return db.query(sql, [user_id, name, start_date, end_date, image_url])
    .then(dbRes => dbRes.rows[0])
  }, 

  edit: (name, start_date, end_date, image_url, tripId) => {
    const sql = `
    UPDATE trips 
    SET name = $1, start_date = $2, end_date = $3, image_url = $4
    WHERE id = $5
    RETURNING *
    `

    return db.query(sql, [name, start_date, end_date,image_url, tripId])
      .then(dbRes => dbRes.rows[0])
  },


  delete: (tripId) => {
    const sql = `
    DELETE FROM trips WHERE id = $1
    `
    return db.query(sql, [tripId])
  }
}

module.exports = Trip