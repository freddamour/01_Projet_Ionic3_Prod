import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
//passage d'information du composant vers template
//interpolation par {{}} ou []=
  private titre: string;
  private firsName: string;
  private name: string;
  private collection: [any];
  public newItem:  {reference:string, name:string, state:number};


  constructor(public navCtrl: NavController) {
    this.titre ='app works';
    this.firsName ="robert";
    this.name = "dupont";
    this.collection = [ 
      {reference:'1234',name:'toto',state:0},
      {reference:'3456',name:'titi',state:1},
      {reference:'5678',name:'tata',state:2},
    ];
    
    this.testObservable();
    this.resetNewItem();
  }// fin constructeur
  resetNewItem(){

    this.newItem={reference:'',name:'',state:0};
  }
  getDetails(event:Event, parameter){
    event.preventDefault();
    console.log(event);
    let eventEnCours = event.target || event.currentTarget || event.srcElement;
    //console.log(eventEnCours.attributes.id); //affiche id=1234
    //console.log(eventEnCours.id); // affiche 1234
    console.log(parameter);
   
  }
  
  creationObjet(){
   
    this.collection.push(this.newItem);
    console.log(this.newItem);
    this.resetNewItem();
  }
      
  doClick(){
    this.name = "click sur button";
  }

  testObservable(){

    // observation de tableau
    [1, 2, 3, 4, 5]
    .map(x => x * 2) // applique la fonction anonyme fn sur chaque événement et retourne le résultat.
    .filter(x => x > 5)// laisse passer les seuls événements qui répondent au prédicat
    .forEach(x => console.log(x));

    //Observable.create reçoit une fonction qui émet des événements sur son paramètre observer
    const observable = Observable.create((observer) => observer.next('hello'));
          observable.subscribe((value) => console.log(value));

    const myObservable = Observable.from([1,2,4,5])
    myObservable.subscribe((i) => console.log(i));
    
    //const myObservable2 = Observable.interval(1000)
    //myObservable2.subscribe((i) => (console.log(i)));

    // observation des Event
    window.onload= function(){
      var btn = document.getElementById('btn');
      var source = Observable.fromEvent(btn,'click');
      source.subscribe((data) => console.log("obs1"+data));
     }
   
      
  }

  


}//fin constructeur
