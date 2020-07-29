import { Cliente }  from '../clientes/cliente';
import { Inventory }  from '../inventory/inventory';

export class Rental {
  id: number;
  rentalDate: string;
  returnDate: string;
  customer: Cliente;
  inventory: Inventory;
  price: number;
}
