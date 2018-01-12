const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// let model = require('./model')
// console.log(model)
// the same as:
// let model = require('./model/index')
// this is a very specific node js behavior - will look specifically for 'index.js'

const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(bodyParser.json())

app.route('/cats')
  .get(controller.getAllCats)
  .post(controller.CreateCat)

app.route('/cats/:id')
  .get(controller.getCat)
  .patch(controller.updateCat)
  .delete(controller.deleteCat)

  app.use(morgan('dev'))
  app.use(bodyParser.json())

/*
ABOVE is the most optimized and modular, below also works:
-----

app.route('/cats')
  .get(controller.getAllCats)
  .post(controller.CreateCat)

app.route('/cats/:id')
  .get(controller.getCat)
  .patch(controller.updateCat)
  .delete(controller.deleteCat)
*/

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
