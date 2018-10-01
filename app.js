console.log('Iniciando aplicación de notas')

const { logNote } = require('./utils.js')

const notas = require('./notes')

// const param = process.argv[2]

// const yargs = require('./yargs')
// const param = yargs.argv
const { argv } = require('yargs')

console.log(argv)

const param = argv._[0]

switch (param) {
  case 'add':
    const nota = notas.addNote(argv.title, argv.body)
    console.log(`Añadiendo nueva nota con título ${argv.title}`)
    if (nota) {
      console.log(`Guardado correctamente con título ${nota.title}`)
    } else {
      console.log(`Nota no guardada porque ya existe`)
    }
    break
  case 'list':
    const allNotes = notas.listNote()
    allNotes.forEach(notaLista => allNotes.logNote(notaLista))
    break
  case 'read':
    const notaLee = notas.readNote(argv.title)
    if (notaLee) {
      logNote(notaLee)
    } else {
      console.log('Nota no encontrada')
    }
    break
  case 'remove':
    const borrado = notas.removeNote(argv.title)
    if (borrado === true) {
      console.log(`Borrados elementos con título ${argv.title}`)
    } else {
      console.log(`No se pudo borrar la nota ya que no existe`)
    }
    break
  default:
    console.log('Comando no reconocido')
    break
}
