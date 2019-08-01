const opts = {
  descripcion: {
    demand: true,
    alias: 'd'
  },
  completado: {
    alias: 'c',
    default: true
  }
}

const argv = require('yargs')
  .command('crear', 'Crear..', opts)
  .command('actualizar', 'Actualizar ..', opts)
  .command('borrar', 'Borrar ..', opts)    
  .help()
  .argv;

  module.exports = {
    argv
  }