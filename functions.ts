import products from "./data.json";

interface Product {
    id: number;
    slug: string;
    shortName: string;
    image: object;
    cartImage: string;
    category: string;
    categoryImage: object;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includedItems: IncludedItems[];
    gallery: object;
    others: OtherItems[];

}

interface IncludedItems {
    quantity: number;
    item: string;
}

interface OtherItems {
    slug: string;
    name: string;
    image: object;

}



export const techItems:Product[] = products.products;
export const allCategories = products.categories;


export const getCategories = function(items:Product[] = techItems) {
    const categories = new Set<string>();
    const result:string[] = []
    for(let i = 0; i < items.length; i++) {
        categories.add(items[i].category)
    }

    for (const item of categories) {
        result.push(item)
    }
    return result
}