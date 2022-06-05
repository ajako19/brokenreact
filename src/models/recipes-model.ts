export interface Results {
    results: Recipe[]
}

export interface Recipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
    apiKey: number;
    addRecipeNutrition: boolean;
    addRecipeInformation: true;
    query: string;
    intolerances: string;
}