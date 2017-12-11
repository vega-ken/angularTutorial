import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: `./sandbox.component.html`,
  styleUrls: [`./sandbox.component.css`]

})

export class SandboxComponent { // tu clase debe hacer match con el nombre del archivo
  
  fireEvent(e , greeting){
    console.log('event ocurred!');
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.type);
    console.log(greeting);
  }
}
