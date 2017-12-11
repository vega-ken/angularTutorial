import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  templateUrl: `./sandbox.component.html`,
  styleUrls: [`./sandbox.component.css`]

})

export class SandboxComponent { // tu clase debe hacer match con el nombre del archivo
  
  birthday = new Date(1981, 1, 15);
  total = 500;
  fee = 0.5;
}
