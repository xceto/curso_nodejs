// const argv = require('yargs').argv

const argv = require('./config/yargs').argv
const por_hacer = require('./por-hacer/por-hacer')

let comando = argv._[0];

switch( comando ){
  case 'crear':
    let tarea = por_hacer.crear(argv.descripcion)
    console.log(tarea)
  break;

  case 'listar':
    console.log('Mostrar las tareas por hacer')
  break;
  
  case 'actualizar':
    console.log('Actualizar una tarea por hacer')
  break;
  
  default:
    console.log('Comando no es reconocido');
  break;
  
}