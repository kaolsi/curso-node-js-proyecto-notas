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
    return note
  }
}

//          -----ALTERNATIVAS DE FUNCIONES-----
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
  const notes = fetchNotes()

  // Filter: devuelve todas las coincidencias
  const notasFiltradas = notes.filter(
    (note) => note.title !== titulo
  )
  saveNotes(notasFiltradas)
  return (notasFiltradas.length === notes.length)
}

const listNote = () => {
  const notes = fetchNotes()
  return notes
}

const readNote = (titulo) => {
  const notes = fetchNotes()

  // Some: devuelve la primera coincidencia
  const miNota = notes.find(
    (note) => note.title === titulo
  )
  return miNota
}

module.exports = {
  addNote,
  removeNote,
  listNote,
  readNote
}
