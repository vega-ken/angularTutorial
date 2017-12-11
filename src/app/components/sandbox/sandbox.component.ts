import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: `./sandbox.component.html`,
  styleUrls: [`./sandbox.component.css`]

})

export class SandboxComponent { // tu clase debe hacer match con el nombre del archivo
  
  user = {
    name: '',
    email: '',
    phone: ''
  }

  onSubmit({value, valid}){
    // recuerda que aqui le envian 'f' que trae 2 cosas como un objeto
      //value representa el objeto del form (los campos que han sido rellenados)
      //valid representa la validacion de los campos
    if(valid){
      console.log(value);
    }
    else{
      console.log('Form is invalid');
    }
  }
}
