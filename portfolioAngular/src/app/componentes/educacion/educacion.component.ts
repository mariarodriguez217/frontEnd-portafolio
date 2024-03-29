import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datosPorfolio: PorfolioService  ) { }
miPorfolio:any;
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPorfolio=data;
    });
  }

}
