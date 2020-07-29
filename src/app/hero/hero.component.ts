import { Component, OnInit } from '@angular/core';
import { Base } from 'base';
import { HeroService } from './hero.service'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Base[];

  mostrar: boolean = false;

  mensaje: string = 'Cargando Información';

  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    /*this.heroService.findAll().subscribe(
      heros => this.heros = heros
    );*/
    this.heroService.getHeroes().subscribe(data => {
        console.log(data)
        this.mostrar = true;
        this.heroes = data;
      }, error => {
        this.mostrar = false;
        this.mensaje = 'No se pudo cargar la informacion de los protagonistas';
        console.log('Ha ocurrido un error: ', error);
      }
    );
  }

}
