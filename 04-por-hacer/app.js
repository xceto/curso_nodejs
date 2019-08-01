// const argv = require('yargs').argv

const argv = require('./config/yargs').argv
const por_hacer = require('./por-hacer/por-hacer')
const colors = require('colors');

let comando = argv._[0];

switch( comando ){
  case 'crear':
    let tarea = por_hacer.crear(argv.descripcion)
    console.log(tarea)
  break;

  case 'listar':
    let listado = por_hacer.getListado()
    for (let tarea of listado){
      console.log('================ Por Hacer ================'.green)
      console.log(tarea.descripcion)
      console.log('Estado', tarea.completado)
      console.log('==========================================='.green)
    }
  break;
  
  case 'actualizar':
    console.log('Actualizar una tarea por hacer')
  break;
  
  default:
    console.log('Comando no es reconocido');
  break;
  
}