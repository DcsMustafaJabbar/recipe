import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Ingredients:Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('Tamatoes',10),
    new Ingredient('Potatoes',6),
    new Ingredient('Onions',3),
    new Ingredient('garlic',1),
  ];
  constructor() { }

  ngOnInit() {
  }

}

