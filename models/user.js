const db = require('../db/db')

const User = {
  findByEmail: email => {
    const sql = `
      SELECT * FROM users
      WHERE email = $1
    `
    return db
      .query(sql, [email])
      .then(dbRes => dbRes.rows[0])
  },

  create: (name, email, passwordDigest) => {
    const sql = `
      INSERT INTO users(name, email, password_digest)
      VALUES ($1, $2, $3)
      RETURNING *
    `

    return db
      .query(sql, [name, email, passwordDigest])
      .then(dbRes => dbRes.rows[0].name)
  },

  // tripsByUserId: () => {
  //   const sql = `
  //     SELECT users.id AS user_ids, trips.id, trips.user_id, trips.name, trips.start_date, trips.end_date FROM trips INNER JOIN users ON users.id = trips.user_id
  //     VALUES ($1, $2, $3)
  //     RETURNING *
  //   `
  // }
}

module.exports = User