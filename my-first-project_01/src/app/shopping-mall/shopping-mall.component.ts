import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-mall',
  templateUrl: './shopping-mall.component.html',
  styleUrl: './shopping-mall.component.css'
})
export class ShoppingMallComponent {
  shoppingMallName: string = 'Shopping Mall'; 
}



/*

  //Element Selector - mostly used Element Selector
  //selector: 'app-shopping-mall',

  //Attribute Selector
  //selector: '[app-shopping-mall]',

  //CSS Selector
  //selector: '.app-shopping-mall',

  
1. String Interpolation - One way binding :
-------------------------------------------
// imports - FormsModule in app.module.ts file is must

export class ShoppingMallComponent {
  shoppingMallName: string = 'Shopping Mall'; 
}


2. Property Binding - One way binding :
---------------------------------------
        Dynamically access for button . use type 2. Property Binding. property binding for one element 

export class ShoppingMallComponent {
  shoppingMallName: string = 'Shopping Mall'; 
  isButtonActive: boolean = true; 
  
  constructor() {
    setTimeout(() => {
      this.isButtonActive = false;
    }, 4000)
  }

}


3. Event Binding - One way binding :
------------------------------------
        Event Binding for trigger the button.

Example 1:
----------

export class ShoppingMallComponent {
  shoppingMallName: string = 'Shopping Mall'; //1. One way binding - String Interpolation
  isButtonActive: boolean = true;   // Dynamically access for button . use 2. Property Binding
  
  constructor() {
    setTimeout(() => {
      this.isButtonActive = false;
    }, 4000)
  }

  createNewShop: string = 'No Shop is added yet'; // 3. Event Binding for trigger the button.
  onCreateShop(): void {
    this.createNewShop = 'New Shop is Added ';
  }

}


Example 2:
----------

export class ShoppingMallComponent {
  shoppingMallName: string = 'Shopping Mall'; //1. One way binding - String Interpolation
  isButtonActive: boolean = true;   // Dynamically access for button . use 2. Property Binding

  constructor() {
    setTimeout(() => {
      this.isButtonActive = false;
    }, 4000)
  }

  createNewShop: string = 'No Shop is added yet'; // 3. Event Binding for trigger the button.
  onCreateShop(): void {
    this.createNewShop = 'New Shop is Added ' + this.shopName;
  }
 
    shopName: string = '';
    onUpdateShopName(event: Event) {
      this.shopName = (<HTMLInputElement>event.target).value;
      console.log((<HTMLInputElement>event.target).value)
    }
  
  }
  

4. Two-way-Binding :
--------------------
Example 1:
----------


export class ShoppingMallComponent {
  shoppingMallName: string = 'Shopping Mall'; //1. One way binding - String Interpolation
  isButtonActive: boolean = true;   // Dynamically access for button . use 2. Property Binding

  constructor() {
    setTimeout(() => {
      this.isButtonActive = false;
    }, 4000)
  }

  createNewShop: string = 'No Shop is added yet'; // 3. Event Binding for trigger the button.
  onCreateShop(): void {
    this.createNewShop = 'New Shop is Added ' + this.shopName;
  }

  shopName: string = '';

}


Example 2:
----------

export class ShoppingMallComponent {
  shoppingMallName: string = 'Shopping Mall'; //1. One way binding - String Interpolation
  isButtonActive: boolean = true;   // Dynamically access for button . use 2. Property Binding

  constructor() {
    setTimeout(() => {
      this.isButtonActive = false;
    }, 4000)
  }

  createNewShop: string = 'No Shop is added yet'; // 3. Event Binding for trigger the button.
  onCreateShop(): void {
    this.createNewShop = 'New Shop is Added ' + this.shopName;
  }

  shopName: string = 'Shop Name';

}


Example 3:
----------

export class ShoppingMallComponent {
  shoppingMallName: string = 'Shopping Mall'; //1. One way binding - String Interpolation
  isButtonActive: boolean = true;   // Dynamically access for button . use 2. Property Binding

  constructor() {
    setTimeout(() => {
      this.isButtonActive = false;
    }, 4000)
  }

  createNewShop: string = 'No Shop is added yet'; // 3. Event Binding for trigger the button.
  isShopCreated: boolean = false;
  onCreateShop(): void {
    this.createNewShop = 'New Shop is Added ' + this.shopName;
    this.isShopCreated = true;
  }

  shopName: string = '';

}


Example 4:
----------
      no change


Example 5:
----------


export class ShoppingMallComponent {
  shoppingMallName: string = 'Shopping Mall'; //1. One way binding - String Interpolation
  isButtonActive: boolean = true;   // Dynamically access for button . use 2. Property Binding

  constructor() {
    setTimeout(() => {
      this.isButtonActive = false;
    }, 4000)
  }

  createNewShop: string = 'No Shop is added yet'; // 3. Event Binding for trigger the button.
  isShopCreated: boolean = false;
  onCreateShop(): void {
    this.createNewShop = 'New Shop is Added ' + this.shopName;
    this.isShopCreated = true;
    //this.shops.push(this.shopName);
  }

  shopName: string = '';

  shops: string[] = ['shop one', 'shop two'];

}


*/