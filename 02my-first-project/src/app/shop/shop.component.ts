import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  id: number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  status: string = 'Opened';

  constructor() {
    this.status = this.id > 5 ? 'Opened' : 'Closed';
  }

  getColor(): string {
    return this.status === 'Opened' ? 'yellow' : 'blue';
  }

}




/*
1. Custom Data for ShopComponent:
---------------------------------

export class ShopComponent {
  id: number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  status: string = 'Opened';

}


2. Attribute Directives:
------------------------
Example 1:
----------

export class ShopComponent {
  id: number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  status: string = 'Opened';

  constructor() {
    this.status = this.id > 5 ? 'Opened' : 'Closed';
  }

}

Example 2:
----------

export class ShopComponent {
  id: number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  status: string = 'Opened';

  constructor() {
    this.status = this.id > 5 ? 'Opened' : 'Closed';
  }

  getColor(): string {
    return this.status === 'Opened' ? 'yellow' : 'blue';
  }

}
*/