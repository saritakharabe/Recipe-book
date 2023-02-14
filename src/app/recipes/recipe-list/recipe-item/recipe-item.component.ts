import { Component, Input, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/shared/recipes.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
   @Input() recipe: Recipe;
   @Input() index:number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  
}