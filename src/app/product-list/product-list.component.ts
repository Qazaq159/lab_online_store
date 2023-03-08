import {Component, Input, OnInit} from '@angular/core';

import {Category, Product} from '../objects';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  @Input() chosenCategory !: Category;
  products!: Product[];

  ngOnInit() {
    this.chosenCategory = {
      name: "d",
      productItems: []
    }
    if(this.chosenCategory.name !== ''){
      this.products = this.chosenCategory.productItems;
    }
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/