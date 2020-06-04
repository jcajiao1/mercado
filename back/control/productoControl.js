const Producto = require('../modelos/productos')
/* traigo modelo de las BD */

function crearProductos(req, res) {
    var producto = new Producto();
    /* creamos la instancia donde accedemos al modelo de productos */
    var parametros = req.body;
    /* contiene los parametros que se envian desde el cliente como parte de una solicitud */
    producto.nombre = parametros.nombre;
    producto.marca = parametros.marca;
    producto.precio = parametros.precio;
    producto.unidades = parametros.unidades;
    /* Gurdmos cada propiedad en el Json */
    producto.save((err, ProductoNuevo) => {
        if (err) {
            res.status(500).send({ message: "error en el servidor" });

        } else {
            if (!ProductoNuevo) {
                res.status(200).send({ message: "no fue posible realizar el registro", statusCode:400})

            } else {
                res.status(200).send({
                    status: 'producto creado',
                    producto: ProductoNuevo,
                    statusCode:200
                })
            }
        }
    })
}
function obtenerProductos(req, res) {
    Producto.find((err, productosEncontrados) => {
        /* metodo pàra buscar en la base de datos */
        if (err) {
            res.status(500).send({ message: "error en el servidor" });
        } else {
            if (!productosEncontrados) {
                res.status(200).send({ message: "no fue posible encontrar el registro", statusCode:400 })

            } else {
                res.status(200).send({
                    status: 'productos encontrados',
                    producto: productosEncontrados,
                    statusCode:200
                })
            }
        }

    })
}

function actualizarProducto(req, res) {
    var productoid = req.params.id;
    /* indico que uno de mis prametros para actualizar va ser  el ID*/
    var nuevosdatosProducto = req.body;
    /* creamos una variable donde se va  recibir los datos nuevos */
    Producto.findByIdAndUpdate(productoid, nuevosdatosProducto, (err, productoActualizado) => {
        if (err) {
            res.status(500).send({ message: "error en el servidor" });
        } else {
            if (!productoActualizado) {
                res.status(200).send({ message: "no fue posible actualizar", statusCode:400 })

            } else {
                res.status(200).send({
                    status: 'productos actualizado correctamente',
                    producto: nuevosdatosProducto,
                    statusCode:200
                })
            }
        }

    })
}   
function eliminarProducto(req,res){
    var productoid= req.params.id;
    /* obtenemos el id del producto a eliminar */
/* este metodo nos permite encontrar el id buscado y eliminado su registro */
    Producto.findByIdAndDelete(productoid,(err,Productoeliminado)=>{
    if (err) {
        res.status(500).send({ message: "error en el servidor" });
    } else {
        if (!Productoeliminado) {
            res.status(200).send({ message: "no fue posible eliminar el producto", statusCode:400 })

        } else {
            res.status(200).send({
                status: 'eliminado correctamente',
                producto: Productoeliminado,
                statusCode:200
            })
        }
    }})
}
module.exports = {
    crearProductos,
    obtenerProductos,
    actualizarProducto,
    eliminarProducto
    /* aqui llamamos las funciones pera exportarlas y poderlas usar en nuestras rutas */

}