import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shopping-mall',
  templateUrl: './shopping-mall.component.html',
  //template: `<app-shop></app-shop>`, or template: `<h1>404 Page not Found</h1>`, if want to dont use templateUrl then use template for a single page.
  styleUrl: './shopping-mall.component.css'
  //,encapsulation: ViewEncapsulation.Emulated,
})
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
    this.shops.push(this.shopName);

  }

  shopName: string = '';

  shops: string[] = ['shop one', 'shop two', 'shop three'];

}


/*
First:
-----

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

  shops: string[] = ['shop one', 'shop two', 'shop three'];

}


3. push the shopName into the shopping-mall.component.ts file:
--------------------------------------------------------------

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
    this.shops.push(this.shopName);
  }

  shopName: string = '';

  shops: string[] = ['shop one', 'shop two', 'shop three'];

}


*/