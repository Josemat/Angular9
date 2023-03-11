import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs'; //Para trabajar con promises o asyncAwait
import { DescripcionProducto, Producto } from './interfaces/producto';
import { RespuestaMLApi } from './interfaces/respuesta-mlapi';

@Injectable({
  providedIn: 'root',
})
export class ServicioProductosService {
  constructor(private http: HttpClient) {}
  // obtenerProductos() {
  //   return this.http.get(
  //     'https://api.mercadolibre.com/sites/MLA/search?q=ipod'
  //   );
  // }
  obtenerProductosPromise(): Promise<RespuestaMLApi> {
    return lastValueFrom(
      this.http.get<RespuestaMLApi>(
        'https://api.mercadolibre.com/sites/MLA/search?q=ipod'
      )
    );
  }
  obtenerProductoDetalle(id: string): Promise<Producto> {
    return lastValueFrom(
      this.http.get<Producto>(`https://api.mercadolibre.com/items/${id}`)
    );
  }
  obtenerProductoDescripcion(id: string): Promise<DescripcionProducto> {
    return lastValueFrom(
      this.http.get<DescripcionProducto>(
        `https://api.mercadolibre.com/items/${id}/description`
      )
    );
  }
  // obtenerProductosPipe() {
  //   return lastValueFrom(
  //     this.http
  //       .get('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
  //       .pipe(map((res: any) => res.results))
  //   );
  // }
}
