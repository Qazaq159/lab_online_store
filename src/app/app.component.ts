import { Component } from '@angular/core';
import {Category} from "./objects";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chosenCategory!: Category ;

  ChooseCategory(categ: Category){
    this.chosenCategory = categ;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/