import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from '../shared/recipes.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  selectedRecipe : Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
   this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) =>{
        this.selectedRecipe = recipe;
      }
    ); 
  }
}
