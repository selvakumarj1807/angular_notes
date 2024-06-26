import { Component } from '@angular/core';
import { IProduct } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productList:IProduct[]=[
    {
      name:'IPhone 15 Pro Max',
      price:'1450',
      imageUrl:'https://www.techspot.com/images2/downloads/topdownload/2020/11/2020-11-05-ts3_thumbs-609-p_256.webp',
    },
  ];

  onProductAdd(product:IProduct){
    this.productList.push(product);
  }
}


/*
Example 1:
----------

export class AppComponent {
  title = 'Component-Lifecycle_03';
}

Example 2:
----------

export class AppComponent {
  productList:IProduct[]=[
    {
      name:'IPhone 15 Pro Max',
      price:'1450',
      imageUrl:'https://www.techspot.com/images2/downloads/topdownload/2020/11/2020-11-05-ts3_thumbs-609-p_256.webp',
    },
  ];
}

Example 3:
----------

export class AppComponent {
  productList:IProduct[]=[
    {
      name:'IPhone 15 Pro Max',
      price:'1450',
      imageUrl:'https://www.techspot.com/images2/downloads/topdownload/2020/11/2020-11-05-ts3_thumbs-609-p_256.webp',
    },
  ];

  onProductAdd(product:IProduct){
    this.productList.push(product);
  }
}

*/