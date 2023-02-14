import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredents.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy{

 public ingredients: Ingredient[];
 public ingredientSubscription: Subscription;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredient();
    this.ingredientSubscription = this.shoppinglistService.ingredientChanged.subscribe(
       (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(): void {
      this.ingredientSubscription.unsubscribe();
  }
  
  onEditItem(index: number){
    this.shoppinglistService.startedEditing.next(index);
  }
}
