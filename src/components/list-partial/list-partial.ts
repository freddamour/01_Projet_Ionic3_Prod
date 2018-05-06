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

  public list: [any];

  constructor(public data: DataProvider) {
    this.list = data.getData();
    console.log(data.getData());

  }

}
