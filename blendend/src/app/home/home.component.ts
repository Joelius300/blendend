import { Component, OnInit } from '@angular/core';
import { ImageEdited } from '../model/image-edited';
import joelImages from '../images/joel.json';
import noahImages from '../images/noah.json';
import yanikImages from '../images/yanik.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  joelImages: ImageEdited[];
  noahImages: ImageEdited[];
  yanikImages: ImageEdited[];

  constructor() { }

  ngOnInit(): void {
    this.joelImages = joelImages;
    this.noahImages = noahImages;
    this.yanikImages = yanikImages;
  }

}
