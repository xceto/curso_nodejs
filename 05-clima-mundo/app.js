const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv

const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

// clima.getClima('-33.459999', '-70.639999')
//      .then(resp => {
//        console.log(resp)
//      })
//      .catch(err => {
//        console.log(err)
//      })


// lugar.getLugarLatLng(argv.direccion)
//      .then( resp => {
//        return getClima(resp.lat, resp.long)
//      } )
//      .catch( err => console.log(err) )


const getinfo = async ( direccion ) => {
  try {
    const coordenadas = await lugar.getLugarLatLng( direccion )
    const temperatura = await clima.getClima( coordenadas.lat, coordenadas.lng )
    return `El clima actual de ${direccion} es ${temperatura}`
  } catch (e) {
    return `Ǹo se pudo determinar el clima de ${direccion}`
  }
}

getinfo( argv.direccion )
.then( console.log )
 .catch( console.log )