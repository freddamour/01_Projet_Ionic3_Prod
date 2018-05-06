import { Component } from '@angular/core';


@Component({
  selector: 'title-partial',
  templateUrl: 'title-partial.html'
})
export class TitlePartialComponent {

  text: string;

  constructor() {
    console.log('Hello TitlePartialComponent Component');
    this.text = 'Coucou depuis un sous composant';
  }

}
