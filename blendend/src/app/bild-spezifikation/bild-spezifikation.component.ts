import {Component, Input, OnInit} from '@angular/core';
import {Bild} from "../model/bild";

@Component({
  selector: 'app-bild-spezifikation',
  templateUrl: './bild-spezifikation.component.html',
  styleUrls: ['./bild-spezifikation.component.scss']
})
export class BildSpezifikationComponent implements OnInit {

  @Input() bild: Bild;

  constructor() { }

  ngOnInit(): void {
  }

}
