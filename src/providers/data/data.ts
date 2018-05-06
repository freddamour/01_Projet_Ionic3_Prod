//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {



  constructor() {
    console.log('Hello DataProvider Provider');
  }

  getData(): [any] {
    // retourne un objet pur
    
    return [
      {name: 'toto', roles: 'lead-dev'},
      {name: 'titi', roles: 'lead-titi'},
      {name: 'tata', roles: 'lead-tata'}
    ];
  }







}// fin de la classe
