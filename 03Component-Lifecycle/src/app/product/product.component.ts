import { Component, Input } from '@angular/core';
import { IProduct } from '../_models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product: IProduct;

  constructor() {
    console.log('1. Constructor Called');
  }

  ngOnInit() {
    console.log('3. ngOnInit Called');
  }

  ngOnChanges() {
    console.log('2. ngOnChanges Called');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck Called');
  }

  ngAfterContentInit() {
    console.log('5. ngAfterContentInit run only once for load ng-content');
  }

  ngAfterContentChecked() {
    console.log('6. ngAfterContentChecked called');
  }


  ngAfterViewInit() {
    console.log('7. ngAfterViewInit Called');
  }

  ngAfterViewChecked() {
    console.log('8. ngAfterViewChecked called')
  }

  ngDestroy() {
    console.log('9. ngDestroy Called only if delete some product or use delete method')
  }
}

/*
Example 1:
----------
export class ProductComponent {
  
}

Example 2:
----------

export class ProductComponent {
  @Input() product: IProduct;
}


Example 3:
----------

export class ProductComponent {
  @Input() product: IProduct;

  constructor() {
    console.log('1. Constructor Called');
  }

  ngOnInit() {
    console.log('3. ngOnInit Called');
  }

  ngOnChanges() {
    console.log('2. ngOnChanges Called');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck Called');
  }

  ngAfterContentInit(){
    console.log('5. ngAfterContentInit run only once for load ng-content');
  }

  ngAfterContentChecked(){
    console.log('6. ngAfterContentChecked called');
  }


  ngAfterViewInit(){
    console.log('7. ngAfterViewInit Called');
  }

  ngAfterViewChecked(){
    console.log('8. ngAfterViewChecked called')
  }

  ngDestroy(){
    console.log('9. ngDestroy Called only if delete some product or use delete method')
  }
}

*/