
const fs = require('fs');

const guardarDB = () => {
  let data = JSON.stringify(listado_por_hacer)

  fs.writeFile('db/data.json', data, (err) => {
    if(err){
      console.log("No se pudo grabar ",err)
    }
  })
}

const cargarDB = () => {
  try{
    listado_por_hacer = require('../db/data.json')
  } catch (error) {
    listado_por_hacer = [];
  }
}

let listado_por_hacer = [];
  
const crear = (descripcion) => {
  
  cargarDB();

  let por_hacer = {
    descripcion,
    completado: false
  }

  listado_por_hacer.push(por_hacer)
  guardarDB();
  
  return por_hacer
}

const getListado = () => {
  cargarDB()
  return listado_por_hacer
}

module.exports = {
  crear,
  getListado
}