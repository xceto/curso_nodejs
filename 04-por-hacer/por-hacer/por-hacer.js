
const fs = require('fs');

const guardarDB = () => {
  let data = JSON.stringify(listado_por_hacer)

  fs.writeFile('db/data.json', data, (err) => {
    if(err){
      console.log("No se pudo grabar ",err)
    }
  })
}

let listado_por_hacer = [];

const crear = (descripcion) => {
  let por_hacer = {
    descripcion,
    completado: false
  }

  listado_por_hacer.push(por_hacer)
  guardarDB();
  
  return por_hacer
}

module.exports = {
  crear
}