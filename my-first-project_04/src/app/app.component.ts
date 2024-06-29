import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  price = 125;
}



/*
Example 1:
----------

export class AppComponent {
  num: string = '';
}

Example 2:
----------

export class AppComponent {
  toDate = new Date();
}

Example 3:
----------

export class AppComponent {
  message = 'Welcome to Angular';
}


Example 4:
----------

export class AppComponent {
  price = 125;
}
  
*/