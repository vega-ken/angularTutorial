import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  template: `
    <h1>Hello {{ name }}.</h1>
  `
})

export class SandboxComponent{ // tu clase debe hacer match con el nombre del archivo
  name:string = 'John Doe';
  age:number = 45;
  hasChildren:boolean = true;

  city:any = 'Boston';
  myNumbersArray:number[] = [1,2,3];
  myStringsArray:string[] = ['hola', 'mundo'];

  myAnyArray:any[] = ['hello', 234];

  myTuple: [string, number] = ['hello', 3]; // mas especifico

  unusable:void = undefined;
  u:undefined = undefined;
  n:null = null; // o undefined;


  constructor(){ // se ejecuta cuando el componente se incializa
    this.myNumbersArray = [2,3];
  }

}
