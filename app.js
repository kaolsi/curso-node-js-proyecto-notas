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
    notas.addNote()
    console.log(`Añadiendo nueva nota con título ${argv.title}`)
    break
  case 'list':
    notas.listNote()
    break
  case 'read':
    notas.readNote()
    break
  case 'remove':
    notas.removeNote()
    break
  default:
    console.log('Comando no reconocido')
    break
}
