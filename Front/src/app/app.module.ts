import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {productosService} from './service/producto.service';
import {HttpClientModule} from '@angular/common/http'
/* habilitamos las llamadas http get,put,delete,post y la cabecera en nuestro caso las rutas */

import { FormularioComponent } from './components/formulario/formulario.component';
import {FormsModule} from '@angular/forms'
/* nos permite convertir un formulario html a un formulario angular y pueda utilizar el servicio */
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [productosService],/* prover producto service */
  bootstrap: [AppComponent]
})
export class AppModule { }
