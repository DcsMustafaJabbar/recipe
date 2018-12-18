import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
  new Recipe('Fish with Lemon', 'the Fish with Lemo', 'http://www.chewoutloud.com/wp-content/uploads/2017/06/easy-lemon-butter-fish-0.jpg'),
  new Recipe( 'Chicken' , 'the Chicken', 'https://c1.staticflickr.com/3/2809/33354707111_28840a00d1_z.jpg'),
  new Recipe('Taka Chicken', 'the Taka Chicken', 'https://c1.staticflickr.com/3/2809/33354707111_28840a00d1_z.jpg'),
  new Recipe('Nudell', 'the Nudell', 'https://pinchofyum.com/wp-content/uploads/Chili-Sesame-Zoodles-Recipe.jpg')];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
