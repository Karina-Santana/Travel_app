const db = require("../db/db")

const Trip = {
  findAll: () => { 
    const sql = 'SELECT * FROM trips'

    return db 
    .query(sql)
    .then(dbRES => dbRES.rows)
  }, 

  create: (name, start_date, end_date) => {
    const sql = `
    INSERT INTO trips(name, start_date, end_date) VALUES ($1, $2, $3)
    RETURNING *
    `
    
    return db.query(sql, [name, start_date, end_date])
    .then(dbRes => dbRes.rows[0])
  }, 

  edit: (id) => {
    const sql = `
    SELECT * FROM trips WHERE id = $1
    RETURNING *
    `
    
    return db.query(sql, [id])
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