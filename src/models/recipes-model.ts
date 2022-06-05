export interface Results {
    results: Recipe[]
}

export default interface Recipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
}