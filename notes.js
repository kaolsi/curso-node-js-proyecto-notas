console.log('Módulo de notas cargado')

const addNote = () => {
  console.log(`Nueva nota`)
  return 'Nueva nota'
}

//          -----ALTERNATIVAS-----
/* const addNote = function () {
  console.log(`Nueva nota`)
  return 'Nueva nota'
} */

/*
  module.exports.addNote = function (id) {
  console.log(`Nueva nota`)
  return 'Nueva nota'
} */

const removeNote = (id) => {
  console.log(`Nota con ${id} borrada`)
  // console.log('Nota con' + id + 'borrada')
  return 'Nota borrada'
}

module.exports = {
  addNote,
  removeNote
}
