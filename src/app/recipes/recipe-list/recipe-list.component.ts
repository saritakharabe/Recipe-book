import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { RecipeService } from 'src/app/shared/recipes.service';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes: Recipe[] ;
  subscription: Subscription;  
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
   this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(): void{
    this.router.navigate(['/recipes', 'new-recipe']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
