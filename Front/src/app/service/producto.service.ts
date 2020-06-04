/* este archivonos permite conectarno anuestra api y crear los metodos para consumir las funciones de nuestra api-CrearProducto(),obtenerProducto()ect */
import {Injectable} from '@angular/core';
/* INICIA A ANGULAR QUE LQA CLASE PRODUCTOSERVICE P'UEDE NECESITAR DEPENDENCIAS DE LAS FINCIONES EXTERNAS */
import {HttpClient,HttpHeaders} from '@angular/common/http'
/* estos me permiten usar los metodos http y las rutas de nuestra api */
import{observable} from 'rxjs'/* se encarga de recoger la informcion de angular,envairla a la api  y recoge las respuiestas */

@Injectable()
export class productosService{
    apiUrl='http://localhost:3000/api'
    /* CREAMOS UNA VARIABLE QUE VA A TENER LA RUTA DE NUESTRA API */
    constructor( private http:HttpClient){}
    /* creamos el contructor con una variable privada que contienen los metodos http */
    crearProductos(ProductoNuevo){
        const params=JSON.stringify(ProductoNuevo);
        /* creamos la constante quien recibe los datos de forma en js en JSon */
        const options={headers: new HttpHeaders({'Content-type':'application/json'})
    };
    return this.http.post(/* estamos retornando un objeto por el cual por el metodohttp les estamos enviando por los datos */
        this.apiUrl +'/crear',/* le indicamos la ruta de nuestra api */
        params,/* le indicamos los datos que se estan enviando */
        options/* le indicamos que se esta enviando al json */
    ).pipe(res=>res)/* pipe convierte datos de entrada los que se ingre en formulario en datos de salida en forma de respuesta y nos trae la respuesta de nujestra api */

}
crearProducto(ProductoNuevo){}
obtenerProductos() {/* llamaos a la ruta */
    return this.http.get(this.apiUrl + '/mostrar').pipe(res=>res);
   

}
actualizarProducto(productoid,ProductoActualizado){
/* requerimos el id del producto y los nuevos datos */
let params=JSON.stringify(ProductoActualizado);

const options={headers: new HttpHeaders({'Content-type':'application/json'})};
return this.http.put(/* llamamos la funcion Put */
    this.apiUrl + '/actualizar/'+ productoid,/* creamos el ruta mas el id */
    params,
    options
).pipe(res=>res)
}
eliminarProducto(productoid){
    let options={
        headers: new HttpHeaders({'Content-Type':'applications/service'})
    };

    return this.http.delete(
        this.apiUrl + '/eliminar/'+ productoid,
        options).pipe(res=>res)
}

}
