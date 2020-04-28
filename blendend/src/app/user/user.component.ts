import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  validUsers = ['joel', 'noah', 'yanik'];
  user: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.user = params.user
    );

    // definitely suboptimal but who cares
    if (!this.validUsers.includes(this.user)) {
      this.router.navigate(['/']);
    }
  }

}
