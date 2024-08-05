import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService) { }
  user = { localId: "someid", displayName: "somename" };
  ngOnInit(): void {
    this.auth.canAccess();
    if (this.auth.isAuthenticated()) {
      //call user details service
      this.auth.detail().subscribe({
        next: data => {
          this.user.localId = data.users[0].localId;
          this.user.displayName = data.users[0].displayName;
        }
      })
    }
  }

}


/*
Example 01:
-----------

export class DashboardComponent {

}

Example 02:
-----------

export class DashboardComponent {
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.canAccess();
  }
}

Example 03:
-----------

export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService) { }
  user = { localId: "someid", displayName: "somename" };
  ngOnInit(): void {
    this.auth.canAccess();
    if (this.auth.isAuthenticated()) {
      //call user details service
      this.auth.detail().subscribe({
        next: data => {
          this.user.localId = data.users[0].localId;
          this.user.displayName = data.users[0].displayName;
        }
      })
    }
  }

}
*/