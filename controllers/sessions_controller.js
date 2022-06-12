const express = require('express')
const router = express.Router()

// models
const User = require('../models/user')

// bcrypt
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
  const { email, password } = req.body

  User
    .findByEmail(email)
    .then(user => {
      if(user) {
        const isValidPassword = bcrypt.compareSync(password, user.password_digest)
        if (user && isValidPassword) {
          req.session.userId = user.id
          res.json({ userName: user.name, userId: user.id })
          
        }
      } else {
          console.log('error')
          res.json(null)
      }
    })
})

module.exports = router