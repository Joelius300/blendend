import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  watcher: Subscription;

  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger;

  constructor(private mediaObserver: MediaObserver ) {
    this.watcher = mediaObserver.asObservable().subscribe((_: MediaChange[]) => {
      if (this.mediaObserver.isActive('gt-sm')) {
        this.trigger.closeMenu();
      }
    });
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

}
