import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: `./sandbox.component.html`,
  styleUrls: [`./sandbox.component.css`]

})

export class SandboxComponent { // tu clase debe hacer match con el nombre del archivo
  
  name:string = "";
  users:string[] = ['Jhon doe', 'Marie Jane', 'Smith smith'];

  onSubmit(){ // evento lanzado por el form
    this.users.push(this.name);
    this.name = ""; // como esta propiedad esta enlazada con el UI, ya no tienes que llegar al elemento del html. solo cambiar la propiedad!
  }

}
