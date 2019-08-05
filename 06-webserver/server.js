const express = require('express')
const app = express()

const hsb = require('hbs')
require('./hbs/helpers')

app.use( express.static( __dirname+'/public') ) //Midleware

//Express HBS Engine
hsb.registerPartials( __dirname + '/views/partials')
app.set('view engine', 'hbs');

hsb.registerHelper('getAnio', () => {
  return new Date().getFullYear();
})

hsb.registerHelper('capitalizar', (texto) => {
  let palabras = texto.split(' ')
  palabras.forEach( (palabra, idx ) => {
    palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  })
  return palabras.join(' ')
})


app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'ClauDio',
    anio: new Date().getFullYear()
  })
})

app.get('/about', function (req, res) {
  res.render('about',{
    nombre: 'Claudio',
    anio: new Date().getFullYear()
  })
})

app.get('/data', function (req, res) {
  res.send('Hola data')
})

app.listen(3000, () => {
  console.log('Escuchando peticiones en el puerto 3000')
})