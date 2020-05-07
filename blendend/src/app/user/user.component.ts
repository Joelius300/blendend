import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../model/image';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: string;
  images: Image[];

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.user === this.user) {
        return;
      }

      this.user = params.user;
      this.getImages();
    });

    this.getImages();
  }

  private getImages(): void {
    this.httpClient.get<Image[]>(`assets/${this.user}.json`)
                   .subscribe(result => this.images = result);
  }
}
