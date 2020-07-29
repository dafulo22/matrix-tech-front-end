import { Component, OnInit } from '@angular/core';
import { Base } from 'base';
import { DirectorService } from './director.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  directors: Base[];

  mostrar: boolean = false;

  mensaje: string = 'Cargando Información';

  constructor(private directorService: DirectorService) { }

  ngOnInit() {
    /*this.directorService.findAll().subscribe(
      directors => this.directors = directors
    );*/
    this.directorService.getDirectors().subscribe(data => {
        console.log(data)
        this.mostrar = true;
        this.directors = data;
      }, error => {
        this.mostrar = false;
        this.mensaje = 'No se pudo cargar la informacion de los directores';
        console.log('Ha ocurrido un error: ', error);
      }
    );
  }

}
