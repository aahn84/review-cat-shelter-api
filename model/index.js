let cats = [
  {
    id: 11288,
    name: 'charlie the cat',
    age: 2,
    breed: 'tabby',
    temperament: 'lies down a lot'
  },
  {
    id: 55332,
    name: 'chairman meow',
    age: 5,
    breed: 'ragdoll',
    temperament: 'aggressive'
  }
]

let id = 5000

function getAllCats() {
  return cats
}

function getCat(id) {
  let cat = cats.filter(cat => cat.id == id)[0]
  return cat

  // unlike .filter(), no need to return .find() at [0] because it will return the object, not the object in an array

  // let cat = cats.find(cat => cat.id == id)
  // return cat
}

function createCat(data) {
  let cat = {
    id: id++,
    name: data.name,
    age: data.age,
    breed: data.breed,
    temperament: data.temperament
  }
  cats.push(cat)
  return cat
}

function updatedCat(id, data) {
  let cat = getCat(id)

  for (var key in data) {
    cat[key] = data[key]
  }
  return cat

/*
  or the above is similar to...but the below creates a new object (...spread operator creates a new object which is a copy of the first, so you'd have to add code to remove the old object and add the new object for the below to work)
  ------

  let cat = {...getCat(id), data}
  return cat
*/

}

function deleteCat(id) {
  let cat = getCat(id)
  cats = cats.filter(cat => cat.id != id)

  return cat
}

module.exports = {
  getAllCats, getCat, createCat, updateCat, deleteCat
    // getCats() {
    // fancier version of below
    // },

    // function: getCats(id) {
    //   console.log(this.cats)
    // },
}
