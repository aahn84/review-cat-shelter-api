//https://github.com/CADBOT/catapi

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

let model = require('./model')
console.log(model)
// the same as:
// let model = require('./model/index')
// this is a very specific node js behavior - will look specifically for 'index.js'

const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(bodyParser.json())

// READ routes
app.get('/cats', (req, res) => {
  // res.json(model.cats)
  let cats = model.getAllCats()
  res.json({data: cats})
})

app.get('/cats/:id', (req, res) => {
  let id = Number(req.params.id)
  let cat = model.getCat(id)

  res.json({data: cat})

  // let cat = model.cats.filter(cat => cat.id === req.params.id)[0]

  /*

  can also be written as:

  let catsWhoMatchTheId = model.cats.filter(cat => {
  return cat.id === req.params.id
  })

  // let catsWhoMatchTheId = model.cats.filter(cat => cat.id === req.params.id)[0]
  // let specificCat = catsWhoMatchTheId[0]

  */
  // res.json({data: cat})
})

// CREATE route
app.post('/cats', (req, res) => {
  let newCat = model.createCat(req.body)
  res.json({data: newCat})
})

// UPDATE route
app.patch('/cats/:id', (req, res) => {
  let updatedCat = model.updateCat(req.params.id, req.body)
  res.json({data: updatedCat})
})

// DELETE route
app.delete('/cats.:id', (req, res) => {
  let deletedCat = model.deleteCat(req.params.id)
  res.json({data: deletedCat})
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
