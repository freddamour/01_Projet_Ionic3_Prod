import { Data } from './../../Models/Data';

import { Component } from '@angular/core';
//import de service manuellement
import { DataProvider } from './../../providers/data/data';
/**
 * Generated class for the ListPartialComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-partial',
  templateUrl: 'list-partial.html'
})

export class ListPartialComponent {

  public dossiers: Array<Data>;
  public dossierIDE: Array<Data>;
  public dossierGestions: Array<Data>;
  public dossierActivitees: Array<Data>;
  

  constructor(public data: DataProvider) {
    this.dossiers = data.getData();
    this.dossierIDE = this.dossiers.filter(i=>(i.name=="IDE Logiciel"));
    this.dossierGestions = this.dossiers.filter(i=>(i.name=="Gestions"));
    this.dossierActivitees = this.dossiers.filter(i=>(i.name=="Activitées"));
    console.log(this.dossierIDE)
   // console.log(data.getData());

  }

}
