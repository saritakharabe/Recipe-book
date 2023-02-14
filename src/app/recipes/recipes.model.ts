import { Ingredient } from "../shared/ingredents.model";

export class Recipe{
  public  name: string;
  public description: string;
  public ingredients: Ingredient[];
  public imagePath: string;

  constructor(name: string, desc: string, image: string, ingredients: Ingredient[]){
      this.name = name;
      this.description = desc;
      this.imagePath = image;
      this.ingredients = ingredients;
  }
}