console.log('Iniciando aplicación de notas')

const notas = require('./notes')

// const param = process.argv[2]

// const yargs = require('./yargs')
// const param = yargs.argv
const { argv } = require('yargs')

console.log(argv)

const param = argv._[0]

switch (param) {
  case 'add':
    notas.addNote(argv.title, argv.body)
    console.log(`Añadiendo nueva nota con título ${argv.title}`)
    break
  case 'list':
    notas.listNote()
    break
  case 'read':
    notas.readNote(argv.title)
    break
  case 'remove':
    notas.removeNote(argv.title)
    break
  default:
    console.log('Comando no reconocido')
    break
}
