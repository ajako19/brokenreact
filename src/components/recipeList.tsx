import { useState, useEffect } from "react"
import getRecipes from "../services/getRecipes"
import Recipe from "../models/recipes-model"

export default function recipeResaults () {
    const [mealData, setMealData] = useState<Recipe[]>([])

    useEffect(() => {
        getRecipes().then(data => setMealData(data)) // why
    }, [])

    return (
        <div>
            <h1>Recipes here</h1>
            {mealData.map((recipe) => {
                return <EachRecipe recipe={recipe}/>
            })}
        </div>
    )
}

// for when i get back: need to find the interface stuff to fix errors