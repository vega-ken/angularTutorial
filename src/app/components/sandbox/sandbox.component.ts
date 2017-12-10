import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: `./sandbox.component.html`,
  styleUrls: [`./sandbox.component.css`]

})

export class SandboxComponent { // tu clase debe hacer match con el nombre del archivo
  isSpecial:boolean = true;
  canSave:boolean = true;

  currentClasses = {};

  constructor(){
    this.setCurrentClasses();
  }

  setCurrentClasses(){
    this.currentClasses = {
      saveable:this.canSave,
      special2:this.isSpecial
    }  
  }
}
