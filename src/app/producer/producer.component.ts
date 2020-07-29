import { Component, OnInit } from '@angular/core';
import { Base } from 'base';
import { ProducerService } from './producer.service'

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  producers: Base[];

  mostrar: boolean = false;

  mensaje: string = 'Cargando Información';

  constructor(private producerService: ProducerService) {

  }

  ngOnInit() {
    /*this.producerService.findAll().subscribe(
      producers => this.producers = producers
    );*/
    this.producerService.getProducers().subscribe(data => {
        console.log(data)
        this.mostrar = true;
        this.producers = data;
      }, error => {
        this.mostrar = false;
        this.mensaje = 'No se pudo cargar la informacion de los productores';
        console.log('Ha ocurrido un error: ', error);
      }
    );
  }

}
