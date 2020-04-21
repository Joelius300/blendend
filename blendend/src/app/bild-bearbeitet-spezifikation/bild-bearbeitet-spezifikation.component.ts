import {Component, Input, OnInit} from '@angular/core';
import {BildBearbeitet} from "../model/bild";

@Component({
  selector: 'app-bild-bearbeitet-spezifikation',
  templateUrl: './bild-bearbeitet-spezifikation.component.html',
  styleUrls: ['./bild-bearbeitet-spezifikation.component.scss']
})
export class BildBearbeitetSpezifikationComponent implements OnInit {

  @Input() bild: BildBearbeitet;

  constructor() {
  }

  ngOnInit(): void {
  }

}
