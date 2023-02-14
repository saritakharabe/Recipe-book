import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipes.model";
import { RecipeService } from "./recipes.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorage{
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeData(){
        const recipe = this.recipeService.getRecipes();
        this.http.put('https://course-project-recipe-bo-default-rtdb.firebaseio.com/recipes.json', recipe)
            .subscribe(response =>{
                console.log(response);
            });
    }

    fetchData(){
        this.http.get<Recipe[]>('https://course-project-recipe-bo-default-rtdb.firebaseio.com/recipes.json')
            .subscribe(response => {
                this.recipeService.setRecipes(response);
            });
    }
}