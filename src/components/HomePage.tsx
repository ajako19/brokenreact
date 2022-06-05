import { useState } from "react";
import {Recipe} from "../models/recipes-model";
import getRecipes from "../services/getRecipes";
import RecipeList from "./RecipeList";

export default function HomePage () {
    const [textInput, setTextInput] = useState<string>("");
    const [mealData, setMealData] = useState<Recipe[]>([])

    function search () {
        getRecipes(textInput).then((data) => {
            if (data) {
                setMealData(data)
            } // figure out why use data
        })
    }
    // function search basically runs the getRecipes request
    // with the textInput as a paramater as 
    // the query(the food searched)

    return (
        <div className="HomePage">
            <div className="searchBar">
                <input
                id="searchBar"
                type="text"
                value={textInput}
                onChange={(e) => {
                    setTextInput(e.target.value)
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        search();
                    }
                }}
                />
                <button onClick={search}>
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                
            </div>

            <div className="filterSection">
                <input id="vegetarian" type="checkbox" />
                <label htmlFor="vegetarian">Vegetarian</label>

                <input id="dairyfree" type="checkbox" />
                <label htmlFor="dairyfree">Dairy-Free</label>

                <input id="glutenfree" type="checkbox" />
                <label htmlFor="glutenfree">Gluten-Free</label>

                <input id="nutfree" type="checkbox" />
                <label htmlFor="nutfree">Nut-Free</label>

                <input id="shellfishfree" type="checkbox" />
                <label htmlFor="shellfishfree">Fish/Shellfish Free</label>
            </div>
                {mealData && <RecipeList mealData={mealData}></RecipeList>}
        </div>
    )
}

// input sets the input as the event value
// e.key is kind of like the python, just checking if the keydown
// equals the enter key

// had to annotate line 7 for string
