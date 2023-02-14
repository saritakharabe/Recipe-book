import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "./ingredents.model";


export class ShoppingListService{
  //  ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

    ingredients: Ingredient[] = [
        new Ingredient( 'Potatoes', 10),
        new Ingredient('Orange', 10)
      ];
      
    getIngredient(): Ingredient[]{
        return this.ingredients;
    }
    getEditIngredient(index: number): Ingredient{
      return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient): void{
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients);
    }

    addIngredientsToshopping(ingredients: Ingredient[]): void{
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients);
    }

    updateorEditIngredient(index : number, newIngredent: Ingredient):void {
      this.ingredients[index] = newIngredent;
      this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number): void{
      this.ingredients.splice(index, 1);
      this.ingredientChanged.next(this.ingredients.slice())
    }
    
}