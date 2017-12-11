import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'sandbox',
  templateUrl: `./sandbox.component.html`,
  styleUrls: [`./sandbox.component.css`]

})

export class SandboxComponent { // tu clase debe hacer match con el nombre del archivo
  
  dataArray:any[] = [];

  constructor(public dataService:DataService){
    this.dataService.getData().subscribe(data => {
      //console.log(data);
      this.dataArray.push(data);
    });
  }
}
