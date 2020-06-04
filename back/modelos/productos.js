const mongoose= require('mongoose')
const Schema= mongoose.Schema;
/* cada esquema se asigna a una coleccion de mongoDB y define la forma de los documentos dentro de  esta coleccion */
/* creamos una instancia del objeto Schema */
var ProductoSchema= new Schema({
    nombre:String,
    marca:String,
    precio:Number,
    unidades:Number
})

module.exports= mongoose.model('Producto',ProductoSchema)
/* exportamos el modulo,asignamos el nombre para poderlo manipular en otro archivo
y indicamos el nombre de nuestra instancia */
