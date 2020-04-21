import {Component, Input, OnInit} from '@angular/core';
import {Bild} from "../model/bild";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() bilder: Bild[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
