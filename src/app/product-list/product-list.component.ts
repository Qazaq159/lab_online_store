import { Component } from '@angular/core';

import { objects } from '../objects';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = objects;

  share() {
    window.alert('The product has been shared!');
    
  }

  onNotify() {
    window.alert("You'll be get notify!");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/