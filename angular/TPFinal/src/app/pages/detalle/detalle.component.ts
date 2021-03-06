import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {
  producto;
  loading=true;

  constructor(
    private productosSrv:ProductosService,
    private activatedRoute:ActivatedRoute
  ) { }

  async ngOnInit() {
    try {
      const id = this.activatedRoute.snapshot.paramMap.get("id")
      this.producto = await this.productosSrv.getProducto(id)
      this.loading=false;
    } catch(e) {

    } 
  }
}
