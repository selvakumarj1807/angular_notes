import { Component } from '@angular/core';
import { IProduct } from '../_models/product.model';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrl: './product-upsert.component.css'
})
export class ProductUpsertComponent {
product: IProduct = { name: '', price: '', imageUrl: '' };

onsubmit(){
  console.log(this.product);
  this.product = { name: '', price: '', imageUrl: '' };
}
}
