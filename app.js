//require related module 
const express = require('express')
const app = express()
const port = 3000

const exhbs = require('express-handlebars')
//require generatePassowrd function
const generatePassword = require('./generate_password')
//set template engin
app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set bodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

//set routing
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const password = generatePassword(req.body)
  res.render('index', { password: password, options: req.body })
})

app.listen(port, () => {
  console.log(`Express server start on http://localhost:${port}`)
})
