import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { RespuestaMLApi } from '../interfaces/respuesta-mlapi';
import { ServicioProductosService } from '../servicio-productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productos: Producto[] = [];
  productosPipe: any = [];
  constructor(private productoServicios: ServicioProductosService) {
    // this.productos = productoServicios.obtenerProductos().subscribe({
    //   next: (result: any) => {
    //     this.productos = result['results'];
    //     console.log(this.productos);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });

    //------------------------------------------ Manejo con promise
    // this.productoServicios
    //   .obtenerProductosPromise()
    //   .then((result: any) => (this.productos = result.results))
    //   .catch((error) => console.log(error));
    //-----------------------------------------------Con asyncAwait
    this.llamarProductos();
    //-----------------------------------------------Con Pipe
    // this.productosPipe = this.productoServicios.obtenerProductosPipe();
  }
  async llamarProductos() {
    const response: RespuestaMLApi =
      await this.productoServicios.obtenerProductosPromise();
    this.productos = response.results;
  }
}
