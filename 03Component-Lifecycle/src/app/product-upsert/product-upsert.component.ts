import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../_models/product.model';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrl: './product-upsert.component.css'
})

export class ProductUpsertComponent {
  product: IProduct = { name: '', price: '', imageUrl: '' };

  @Output() addProduct = new EventEmitter<IProduct>();

  onsubmit() {
    console.log(this.product);

    this.addProduct.emit(this.product); //addProduct is a function for capture the emit values for app.component.html

    this.product = { name: '', price: '', imageUrl: '' };
  }
}

/*

Example 1:
----------

export class ProductUpsertComponent {
  
}

Example 2:
----------

export class ProductUpsertComponent {
product: IProduct = { name: '', price: '', imageUrl: '' };

onsubmit(){
  console.log(this.product);
  this.product = { name: '', price: '', imageUrl: '' };
}
}

Example 3:
----------

export class ProductUpsertComponent {
  product: IProduct = { name: '', price: '', imageUrl: '' };

  @Output() addProduct = new EventEmitter<IProduct>();

  onsubmit() {
    console.log(this.product);

    this.addProduct.emit(this.product); //addProduct is a function for capture the emit values for app.component.html

    this.product = { name: '', price: '', imageUrl: '' };
  }
}
*/