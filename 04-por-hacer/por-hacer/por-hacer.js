
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

const actualizar = (descripcion, completado = true) => {
  cargarDB()
  let index = listado_por_hacer.findIndex( tarea => tarea.descripcion === descripcion)
  
  if (index >= 0) {
    listado_por_hacer[index].completado = completado;
    guardarDB();
    return true
  }{
    return false
  }
}

const borrar = (descripcion) => {
  cargarDB();
  
  let index = listado_por_hacer.findIndex( tarea => tarea.descripcion === descripcion)

  if (index >= 0){
    let remove_index = listado_por_hacer.splice(index, 1)
    guardarDB();

    if(remove_index){
      return 'Eliminado correctamente'
    }else{
      return 'Problemas al elminar'
    }
  }else{
    return `${descripcion} No se encuentra guardado en la base de datos`
  }

}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}