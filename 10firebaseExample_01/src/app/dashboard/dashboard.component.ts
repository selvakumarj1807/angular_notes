import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.canAccess();
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
*/