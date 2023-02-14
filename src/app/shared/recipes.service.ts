import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipes.model";
import { Ingredient } from "../shared/ingredents.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable({
    providedIn: 'root'

})
export class RecipeService {
    //recipeSelected  = new EventEmitter<Recipe>();
    recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();
    
    recipes: Recipe[] = [
        new Recipe('Pizza', 
                    'Ingredients for Pizza :', 
                    'https://www.freedomwholehealth.com/uploads/1/0/9/4/109452893/recipes-banner.jpg',
                    [
                        new Ingredient('Cheese', 2),
                        new Ingredient('pizza Base', 1)
                    ]),
        new Recipe('Veg Sandwitch', 
                    'We need ingredients for veg sandwitch : ' , 
                    'https://static.toiimg.com/thumb/60057435.cms?width=1200&height=900',
                    [
                        new Ingredient('sandwitch bread', 2),
                        new Ingredient('tomatoes', 1)
                    ])
      ];

    constructor(private shoppinglistService: ShoppingListService){}  

    setRecipes(recipe: Recipe[]){
        this.recipes = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    
    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }

    getRecipeDetails(index:number): Recipe{
        return this.recipes[index];
    }

   addIngredientToShoppingList(ingrdient: Ingredient[]): void{
    this.shoppinglistService.addIngredientsToshopping(ingrdient);
   }

    onAddRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateOrEditRecipe(index : number, newRecipe: Recipe):void {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    onDeleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
    
}