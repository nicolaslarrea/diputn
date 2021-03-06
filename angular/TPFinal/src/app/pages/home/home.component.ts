import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:any = []
  loading=true;

  constructor(private productosSrv:ProductosService) {
    this.productosSrv.getProductos()
    .subscribe(data=>{
      this.productos=data;
      this.loading=false;
    })
  }

  ngOnInit(): void {
  }
}
