import { Injectable } from '@angular/core';

@Injectable()

export class DataService{
  //para usar este servicio se necesita agregarlo a app.module.ts
  users:string[];

  constructor(){
    this.users = ['Mark', 'Shaun', 'Beth', 'John'];
  }

  getUsers(){
    return this.users;
  }
}

