import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  template: `
    <h1>{{name}} is {{age}} years old.</h1>
    <h2>My name is {{person.firstName}} {{person.lastName}}.</h2>

    <p>Esta parte es llamada con una funcion: {{ showAge() }} </p>
  `
})

export class SandboxComponent{ // tu clase debe hacer match con el nombre del archivo
  name = 'John Doe'; // propiedad
  age = 35; // es raro que no se tenga que poner let o var

  person = {
    firstName: 'Steve',
    lastName: 'Smith'
  };

  constructor(){ // se ejecuta cuando el componente se incializa
    console.log('constructor se ejecuto');
    this.age = 40;
    this.hasBirthDay();
  }

  hasBirthDay(){
    this.age += 1;
  }

  showAge(){
    return this.age;
  }
  
}
