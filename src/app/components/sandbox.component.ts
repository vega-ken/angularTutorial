import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'sandbox',
  template: `
    <h1>Hello World.</h1>
  `
})

export class SandboxComponent{ // tu clase debe hacer match con el nombre del archivo
  
  customer : Customer;/*{ // en lugar de asignarse a esto, se asigna a la interface
    id:number,
    name:string,
    email:string
  }*/

  customers: Customer[];

  constructor(){
    this.customer = {
      id : 35,
      name : 'gg',
      email : 'df'
    }

    this.customers = [
      {
        id : 1,
        name : 'gg',
        email : 'df'
      },
      {
        id : 2,
        name : 're',
        email : 'df'
      },
      {
        id : 3,
        name : 'gg',
        email : 'df'
      }

    ]
  }
}

// cuando tu objeto tiene muchisimos campos para rellenar
