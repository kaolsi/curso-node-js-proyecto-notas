console.log('Módulo de notas cargado')
// const fs = require('fs')

// const utils = require('./utils.js')
// const { saveNotes, fetchNotes } = utils

const { saveNotes, fetchNotes } = require('./utils.js')

const addNote = (title, body) => {
  const notes = fetchNotes()
  const note = {
    title,
    body
  }

  //                                  DUPLICADOS
  /*
  let duplicado = false
  for(let i = 0; i<notes.lenght;i++){
    if(noter[i].title === title) duplicado =true
  }
  if(!duplicado) notes.push(note)
  */

  const duplicados = notes.filter((note) => note.title === title)
  if (duplicados.length === 0) {
    notes.push(note)
    saveNotes(notes)
    console.log(`Guardado correctamente con título `)
  } else {
    console.log(`Nota no guardada porque ya existe`)
  }
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
