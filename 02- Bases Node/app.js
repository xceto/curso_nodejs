// node app listar --base 5  (-- Flags)

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla} = require('./multiplicar/muliplicar');

let comando = argv._[0]

switch( comando ){
  case 'listar':
    console.log('Listando ...');
    listarTabla(argv.base, argv.limite)  
    break;
  case 'crear':
    console.log('Creando Archivo ..')
    crearArchivo(argv.base, argv.limite)
    .then( archivo => console.log(`Archivo creado ${ archivo } `.green) )
    .catch( err => console.log(err) )    
    break;
  default:
    console.log('Comando desconocido')
    break;
}

// console.log( process.argv );
// let argv2 = process.argv
// console.log('limite',argv.limite)

// let parametro = argv[2]
// let base = parametro.split('=')[1]

