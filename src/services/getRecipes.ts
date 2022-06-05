import axios from "axios";
import { Recipe, Results } from "../models/recipes-model";

export default function getRecipes(query: string, intolerances?: string[]):Promise<Recipe[] | void> {
    return axios.get<Results>(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
            apiKey: process.env.REACT_APP_API_KEY,
            addRecipeNutrition: true,
            addRecipeInformation: true,
            query: query,
            // intolerances: intolerances?.join(",")
        }
    })
    .then((response) => {
        return response.data.results;
    })
}
// line 5 is saying it's gonna receive results which is an array
// of Recipes, and on line 15, it's returning the response.data.results
// line 4: parameters for the inputs when we plug the function in
// in the each recipe, you put the input values in
// that's why the query param is the query value in the function
