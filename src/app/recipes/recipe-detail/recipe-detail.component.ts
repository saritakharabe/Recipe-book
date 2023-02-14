import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from 'src/app/shared/recipes.service';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
   id:number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeDetails(this.id);
    })
  }

  addToShoppingList(): void {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(): void {
    //this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(): void {
    this.recipeService.onDeleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
