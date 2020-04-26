import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ImageEdited } from '../model/image-edited';
import BeerSlider from 'beerslider';

@Component({
  selector: 'app-image-edited',
  templateUrl: './image-edited.component.html',
  styleUrls: ['./image-edited.component.scss']
})
export class ImageEditedComponent implements OnInit, AfterViewInit {
  @Input()
  image: ImageEdited;

  @ViewChild('slider')
  slider: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // tslint:disable-next-line: no-unused-expression
    new BeerSlider(this.slider.nativeElement);
  }
}
