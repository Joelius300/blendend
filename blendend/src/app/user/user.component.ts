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
  validUsers = ['joel', 'noah', 'yanik'];
  user: string;
  images: Image[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.user = params.user
    );

    // definitely suboptimal but who cares
    if (!this.validUsers.includes(this.user)) {
      this.router.navigate(['/']);
    }

    this.httpClient.get<Image[]>(`assets/${this.user}.json`)
                   .subscribe(result => this.images = result);
  }

}
