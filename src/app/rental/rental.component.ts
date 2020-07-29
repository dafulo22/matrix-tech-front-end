import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clientes/cliente.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

}
