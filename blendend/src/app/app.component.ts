import { Component } from '@angular/core';
import {Bild} from "./model/bild";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bilder: Bild[] = [{
    src: 'blabla.jpg',
    bezeichnung: 'dies ist ein blatt',
    title: 'Blatt'
  }, {
    src: 'tata.jpg',
    bezeichnung: 'dies ist eine pizza dsfla jflk adsjlfjdslk fjdlskajfl dsajfsad fldjfsdl kfj ds fdslkfdsjlk fl',
    title: 'pizza'
  }];
}
