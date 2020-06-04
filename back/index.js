const mongoose= require('mongoose')
/* requerimos la libreria en nuestro proyecto */
const app=require('./app')
mongoose.connect('mongodb://localhost:27017/MercadoBIT',{useNewUrlParser:true,useUnifiedTopology:true},(error,res)=>{
    if(error){
        console.log("Error al conectarnos con la BD")
    }else{
        console.log("Nos conectamos correctamente")
        app.listen(3000,()=>{
            console.log("Estamos conectado en el puerto 3000")
        })
    }
}
)
/* conect:es el metodo de mongoose el cual nos permitira conectarnos a nuestra base de datos */
/* string o ruta de conexion
MongoDB:es el motor de BD
Localhost:es el servidor
puerto27017
BD a la que nos vamos a conectar y vamos al CRUD

useNewUrlParser: es una analizador de cadenas el cual le debemos especificar el puerto donde escuchara MongoDB

useUnififiedTopology: escucha la solicitud-request y lo monitorea.Nos permite la administracion del controlador de MongoDB
(error,res))=>{} funcion que nos permite validar si la conexion fue exitosa*/