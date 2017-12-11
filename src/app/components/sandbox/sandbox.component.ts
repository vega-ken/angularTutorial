import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: `./sandbox.component.html`,
  styleUrls: [`./sandbox.component.css`]

})

export class SandboxComponent { // tu clase debe hacer match con el nombre del archivo
  isSpecial = true;
  canSave = true;
  currentStyles = {};

  constructor(){
    this.setCurrentStyles();
  }

  setCurrentStyles(){
    this.currentStyles = {
      'font-style' : this.canSave ? 'italic' : 'normal',
      'font-size' : this.isSpecial ? '24px' : '12px'
    }
  }
}
