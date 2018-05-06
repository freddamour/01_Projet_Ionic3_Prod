import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import de service manuellement
import { DataProvider } from './../../providers/data/data';


/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  public list: [any];

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
         
    this.list = data.getData();
    console.log(data.getData());
  }


  //un évenemnet
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
