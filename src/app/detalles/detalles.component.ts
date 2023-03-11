import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DescripcionProducto,
  DetalleCopado,
  Producto,
} from '../interfaces/producto';
import { ServicioProductosService } from '../servicio-productos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent {
  productoDetalle: DetalleCopado | undefined;
  precioOriginal = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private productodetalle: ServicioProductosService
  ) {
    const id: string = this.activateRoute.snapshot.paramMap.get('id') || '';
    this.llamarProducto(id);
  }
  async llamarProducto(id: any) {
    try {
      const detalle: Producto =
        await this.productodetalle.obtenerProductoDetalle(id);
      const descripcion: DescripcionProducto =
        await this.productodetalle.obtenerProductoDescripcion(id);
      if (detalle.original_price) this.precioOriginal = true;
      this.productoDetalle = { detalle, descripcion };
    } catch (error) {
      console.log(error);
    }
  }
}
