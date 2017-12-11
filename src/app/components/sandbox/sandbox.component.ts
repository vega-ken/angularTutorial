import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'sandbox',
  templateUrl: `./sandbox.component.html`,
  styleUrls: [`./sandbox.component.css`]

})

export class SandboxComponent { // tu clase debe hacer match con el nombre del archivo
  
  users:string[];

  // cuando usas servicios, se injectan como dependencias al componente en el constructor

  constructor(public dataService:DataService){
    
    // con el servicio como parametros, ahora se pueden hacer cosas como 
      // this.dataService.getUsers()

      console.log(this.dataService.getUsers());
      // la idea es que mientras mas componentes necesiten de unos valores. es mejor tenerlo como servicio cosa que varios componentes usan el mismo servicio (que tenga metodos y propiedades que varios componentes necesiten)

      this.users = this.dataService.getUsers();
  }
}
