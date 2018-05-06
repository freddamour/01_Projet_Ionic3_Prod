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
      {name: 'toto', role: 'lead-dev', status: 1},
      {name: 'titi', role: 'lead-titi', status: 0},
      {name: 'tata', role: 'lead-tata', status: 1},
      {name: 'toto', role: 'lead-dev', status: 1},
      {name: 'titi', role: 'lead-titi', status: 0},
      {name: 'tata', role: 'lead-tata', status: 1},
      {name: 'toto', role: 'lead-dev', status: 1},
      {name: 'titi', role: 'lead-titi', status: 0},
      {name: 'tata', role: 'lead-tata', status: 1},
      {name: 'toto', role: 'lead-dev', status: 1},
      {name: 'titi', role: 'lead-titi', status: 0},
      {name: 'tata', role: 'lead-tata', status: 1},
      {name: 'toto', role: 'lead-dev', status: 1},
      {name: 'titi', role: 'lead-titi', status: 0},
      {name: 'tata', role: 'lead-tata', status: 1},
    ];
  }







}// fin de la classe
