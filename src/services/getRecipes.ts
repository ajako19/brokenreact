import axios from "axios";
import Recipe, { Results } from "../models/recipes-model";

export default function getRecipes():Promise<Recipe[]> {
    return axios.get<Results>(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9ee1581e34964d5d921ea6cc4fe71b37`)
    .then((response) => {
        response.data;
    })
}