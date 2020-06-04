const express= require('express')

const api= express.Router();
/* este metodo nos permite configurar las rutas */
const productoControl=require('../control/productoControl')
/* importamos o requerimos el control */
api.post('/crear',productoControl.crearProductos)
/* creamos la ruta de creacion */
api.get('/mostrar',productoControl.obtenerProductos)
/* creamos la ruta de mostrar u obtener los datos */
api.put('/actualizar/:id',productoControl.actualizarProducto)
/* actualizar producto */
api.delete('/eliminar/:id',productoControl.eliminarProducto)
module.exports= api;
/* aca exportamos las rutas para que puedan ser utilizadas en nuestro proyecto */

