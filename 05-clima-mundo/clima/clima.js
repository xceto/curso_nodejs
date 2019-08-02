const axios = require('axios');

const getClima = async (lat, lon) => {
  const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
    params: {
      lat: lat, 
      lon: lon,
      appid: '1e76d249d7f49328986b0b2eb389a61a',
      units: 'metric'
    }
  })
  return resp.data.main.temp
}

module.exports = {
  getClima
}