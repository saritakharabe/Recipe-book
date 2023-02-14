import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { Ingredient } from '../../shared/ingredents.model';


@Component({
  selector: 'app-shpping-list-edit',
  templateUrl: './shpping-list-edit.component.html',
  styleUrls: ['./shpping-list-edit.component.scss']
})
export class ShppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
    subscription: Subscription;
    editItemIndex : number;
    editMode : boolean ;
    editItem : Ingredient;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppinglistService.startedEditing.subscribe(
      (index :number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppinglistService.getEditIngredient(index);
        this.shoppingListForm.setValue({
          name : this.editItem.name,
          amount : this.editItem.amount
        })
      }
    );
  }
  addItem(form: NgForm): void{
    const value = form.value;
    const newIngredent = new Ingredient( value.name, value.amount);
    if(this.editMode){
      this.shoppinglistService.updateorEditIngredient(this.editItemIndex, newIngredent);
    } else{
      this.shoppinglistService.addIngredient(newIngredent);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(): void {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(): void {
    this.shoppinglistService.deleteIngredient(this.editItemIndex);
    this.onClear();

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
