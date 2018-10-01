/* REFACTORIZAR:
Como leer y guardar se va a utilizar varias veces, hacemos un fichero al que podremos acceder
 para repetir la acción */
const fs = require('fs')

// Obtener lista JSON y parsear a String
const fetchNotes = () => {
  try {
    const noteString = fs.readFileSync('notes-data.json')
    return JSON.parse(noteString)
  } catch (err) {
    return []
  }
}

// Obtener string y parsear a JSON
const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const logNote = (note) => {
  console.log(`\tTítulo: ${note.title}`)
  console.log(`\tTexto: ${note.body}`)
}

module.exports = {
  fetchNotes,
  saveNotes,
  logNote
}
