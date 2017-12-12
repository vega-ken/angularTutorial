import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'; // para poder retornar la data como observable

@Injectable()

export class DataService{

  constructor(public http:Http){

  }

  getUsers(){
    return this.http.get('http://jsonplaceholder.typicode.com/users') // esto reemplaza a AJAX y XMLHTTPRequest
      .map(res => res.json());
  }

}

