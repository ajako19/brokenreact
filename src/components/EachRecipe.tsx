import { Recipe } from "../models/recipes-model";

interface RecipeProps {
  recipe: Recipe;
}
export default function EachRecipe({ recipe }: RecipeProps) {
  return (
    <div>
      <p>{recipe.title}</p>  
      <img src={recipe.image} alt="" />
    </div>
  );
}

// recipe props is just recipe because this is just 1 of each
// of the recipes being displayed from the .map