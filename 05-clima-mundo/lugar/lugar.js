const axios = require('axios');

const getLugarLatLng = async (direccion_lugar) => {

  const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    headers: {
      'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
      'x-rapidapi-key': 'a81ed08dedmsh4951afd43dbd038p1680f6jsn2ef474c1dcdf'}
  });
  
  const resp = await instance.get('',{ params: { location: direccion_lugar } })

  if (resp.data.Results.length === 0){
    throw new Error(`No hay resultado para ${direccion_lugar}`)
  }

  const data = resp.data.Results[0]
  const direccion = data.name
  const lat = data.lat
  const lng = data.lon
    
  return {
    direccion, 
    lat,
    lng
  }

}

module.exports = {
  getLugarLatLng
}

