import { Component, OnInit } from '@angular/core';
import{producto} from '../../models/producto'
/* importamos el m,odelo para que el form tenga acceso a el */
import { productosService} from '../../service/producto.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
public Producto:producto;
public productosEncontrados:any[]/* los datos encontrados en el contenido for  se iran guardando en el arreglo */
  constructor(private service:productosService) {
    this.Producto= new producto();/* crea y limpia el modelo nuevo cada vez que insertamos un producto */

   }

  ngOnInit(): void {
    /* se llama al iniciar angular,es una tarea de inicializacion adicional.Se caragaran los metodos y funciones que queremos que cargue en la vista sin necesidad de un evento (click) */
    this.mostrarProducto()
  }
  FormularioUp(){
    this.service.crearProductos(this.Producto).subscribe((res:any)=>{
      if(res.statusCode!==200){
        alert("error al crear el producto");

      }else{
        alert("producto creado correctamente")
      }
    })
  }
  mostrarProducto(){
    this.service.obtenerProductos().subscribe((response:any)=>{
this.productosEncontrados=response.producto;
    },
    (error)=>{
      var errormensaje=<any>error;

      if(errormensaje!=null){
        console.log(error)
        
      }
      })
      
    }
    editarProductos(producto){
      this.service.actualizarProducto(producto._id,producto).subscribe((response:any)=>{
        if(response.producto){
        alert("producto actualizado correctamente");
        this.mostrarProducto();  
        }else{
          alert("no fue posibole actualizar producto")
        }
      },error=>{
        if (error!= null){
          console.log(error)
        }
      }
        );
     
      
    }
    eliminarProductos(productoid){
      this.service.eliminarProducto(productoid).subscribe((response:any)=>{
        if(response.producto){
          alert("producto eliminado correctame chimba")
         this.mostrarProducto()
        }else{
          alert("el producto no se elimino paila")
        }},error=>{
          if(error != null){
            console.log(error )
          }
        })}
  }


