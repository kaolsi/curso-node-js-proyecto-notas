console.log('Módulo de notas cargado')

const addNote = (titulo, cuerpo) => {
  console.log('Añadida nota:', titulo, cuerpo)
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

const removeNote = (titulo) => {
  console.log(`${titulo} borrada`)
  // console.log('Nota con' + id + 'borrada')
  return 'Nota borrada'
}

const listNote = () => {
  console.log(`Lista de notas `)
  return 'Lista de notas'
}

const readNote = (titulo) => {
  console.log(`Leer nota`, titulo)
  return 'Leer nota'
}

module.exports = {
  addNote,
  removeNote,
  listNote,
  readNote
}
