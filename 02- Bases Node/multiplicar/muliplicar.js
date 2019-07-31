const fs = require('fs');
const colors = require('colors');

let crearArchivo = ( base, limite ) => {
  return new Promise( (resolve, reject) => {
    if( !Number(base) ) return reject(`${ base } No es un Numero`)

    let data = '';

    for( let i = 1; i <= limite; i++){
      data += (`${base} * ${i} = ${base*i} \n`)
    }
    
    fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {
      if (err) 
        reject(err);
      else
        resolve(`tabla-${ base }.txt`);
    });

  })
}

let listarTabla = (base,limite) => {

  for(let i =1; i<= limite; i++){
    console.log(`${base} * ${i} = ${ base*i }`.yellow)
  }

}

module.exports = {
  crearArchivo,
  listarTabla
}