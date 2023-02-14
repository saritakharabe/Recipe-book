import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/shared/recipes.service';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  get ingControl(): FormArray{
    return this.recipeForm.get('ingredients') as FormArray;
  }

  onSubmit(): void{
    if(this.editMode){
      this.recipeService.updateOrEditRecipe(this.id, this.recipeForm.value);
    }else{
      this.recipeService.onAddRecipe(this.recipeForm.value);
    }
    this.router.navigate(['/recipes']);

  }

  onCancelRecipe(): void {
    //this.recipeForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  addRecipeIngredient(): void{
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        'name': new FormControl('', [Validators.required]),
        'amount': new FormControl('', [Validators.required])
      })
    );
  }

  private initForm(): void{
    let recipeName: string = '';
    let recipeImagePath: string = '';
    let recipeDescription: string = '';
    let recipeIngredient = new FormArray([]);

    if(this.editMode == true){
      const recipe = this.recipeService.getRecipeDetails(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredient.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name, [Validators.required]),
              'amount' : new FormControl(ingredient.amount, [Validators.required])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, [Validators.required]),
      'imagePath' : new FormControl(recipeImagePath, [Validators.required]),
      'description' : new FormControl(recipeDescription, [Validators.required]),
      'ingredients' : recipeIngredient
    });
  }
 
  onDeleteIngredient(index: number){
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }
}
