import { Data } from './../../Models/Data';

//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class DataProvider {

//public dossiers: Array<Object>= new Array<object>();
public dossiers: Array<Data>;

  constructor() {
    console.log('Hello DataProvider Provider');
    this.dossiers = [
    new Data({name: 'En Cours', sousDossier: {'name':'vide','titre':"lien vers…",'icon':"build"}, status: 1}),
    new Data({name: 'IDE Logiciel', sousDossier: {'name': 'Com','titre':"lien vers…",'icon':""}, status: 1}),
    new Data({name: 'IDE Logiciel', sousDossier: {'name': 'Ind','titre':"lien vers…",'icon':"bus"}, status: 1}),
    new Data({name: 'IDE Logiciel', sousDossier: {'name': 'Ter','titre':"lien vers…",'icon':"bulb"}, status: 1}),
    new Data({name: 'Gestions', sousDossier: {'name': 'Progression','titre':"1",'icon':"trending-up"}, status: 1}),
    new Data({name: 'Gestions', sousDossier: {'name': 'Classe','titre':"1",'icon':"person-add"}, status: 1}),
    new Data({name: 'Activitées', sousDossier: {'name':'Projets','titre':"1",'icon':"locate"}, status: 1}),
    new Data({name: 'Activitées', sousDossier: {'name':'Séquences','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Activitées', sousDossier: {'name':'Séances','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Activitées', sousDossier: {'name':'Cours','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Savoirs', sousDossier:{'name': 'Phase0','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Savoirs', sousDossier:{'name': 'Phase1','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Savoirs', sousDossier:{'name': 'Phase2','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Savoirs', sousDossier:{'name': 'Phase3','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Savoirs', sousDossier:{'name': 'Phase4','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Equipements', sousDossier:{'name': '2nd','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Equipements', sousDossier:{'name': '1er','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Equipements', sousDossier:{'name': 'Ter','titre':"1",'icon':"build"}, status: 1}),
    new Data({name: 'Equipements', sousDossier:{'name': 'Autres','titre':"1",'icon':"build"}, status: 1})
  ];}

  getData(): Array<Data>{
      return this.dossiers;
  };
 







}// fin de la classe
