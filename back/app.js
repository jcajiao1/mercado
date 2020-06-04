const express= require('express')
/* requerimos express */
const app= express();
/* convertimos express en un objeto */
const ProductoRuta= require('./rutas/productosRutas')
/* requerimos el modulo de las rutas */
app.use( (req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    // todos los metadatos - cookies
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    // todos los métodos http - métodos de petición
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    // Confirmación estricta de los métodos a utilizar
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
  
    next();
  
  } )
app.use(express.json());
app.use('/api',ProductoRuta)
/* creamos la ruta para accder a nuestra api */

module.exports= app;
/* exportamos el modulo con la logica de express */

