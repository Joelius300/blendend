import { Component, OnInit, Input } from '@angular/core';
import { ImageEdited } from '../model/image-edited';

@Component({
  selector: 'app-image-edited',
  templateUrl: './image-edited.component.html',
  styleUrls: ['./image-edited.component.scss']
})
export class ImageEditedComponent implements OnInit {
  @Input()
  image: ImageEdited;

  constructor() { }

  ngOnInit(): void {
  }

}
