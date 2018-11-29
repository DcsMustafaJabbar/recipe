import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: recipe[] = [new recipe('Fish with Lemon', 'the Fish with Lemo', 'http://www.chewoutloud.com/wp-content/uploads/2017/06/easy-lemon-butter-fish-0.jpg'),
  new recipe('Chicken', 'the Chicken', 'https://www.seriouseats.com/recipes/images/2014/09/20141001-grilled-spiced-cauliflower-joshua-bousel-1500x1125.jpg'),
  new recipe('Taka Chicken', 'the Taka Chicken', 'https://c1.staticflickr.com/3/2809/33354707111_28840a00d1_z.jpg'),
  new recipe('Nudell', 'the Nudell', 'https://pinchofyum.com/wp-content/uploads/Chili-Sesame-Zoodles-Recipe.jpg')];
  constructor() { }

  ngOnInit() {
  }

}

