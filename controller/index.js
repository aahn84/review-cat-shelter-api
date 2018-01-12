let model = require('./model')

function getAllCats(req, res) {
  let cats = model.getAllCats()
  res.json({data: cats})
}

function getCat(req, res) {
  let id = Number(req.params.id)
  let cat = model.getCat(id)

  res.json({data: cat})
}

function createCat(req, res) {
  let newCat = model.createCat(req.body)
  res.json({data: newCat})
}

function updateCat(req, res) {
  let updatedCat = model.updateCat(req.params.id, req.body)
  res.json({data: updatedCat})
}

function deleteCat(req, res) {
  let deletedCat = model.deleteCat(req.params.id)
  res.json({data: deletedCat})
}

module.exports = {
  getAllCats, getCat, createCat, updateCat, deleteCat
}
