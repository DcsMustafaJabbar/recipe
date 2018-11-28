import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:recipe[] = [new recipe('test recipe','the simpel test','https://cdn.shopify.com/s/files/1/0662/0785/products/recipe_cover_grande.jpg?v=1493774901')];
  constructor() { }

  ngOnInit() {
  }

}
