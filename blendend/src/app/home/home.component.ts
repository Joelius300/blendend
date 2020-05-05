import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageEdited } from '../model/image-edited';
import joelImages from '../images/joel.json';
import noahImages from '../images/noah.json';
import yanikImages from '../images/yanik.json';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  watcher: Subscription;
  isSmall: boolean;
  joelImages: ImageEdited[];
  noahImages: ImageEdited[];
  yanikImages: ImageEdited[];

  constructor(private mediaObserver: MediaObserver ) {
    this.watcher = mediaObserver.asObservable().subscribe((_: MediaChange[]) => {
      this.isSmall = this.mediaObserver.isActive('xs');
    });
  }

  ngOnInit(): void {
    this.isSmall = this.mediaObserver.isActive('xs');
    this.joelImages = joelImages;
    this.noahImages = noahImages;
    this.yanikImages = yanikImages;
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

}
