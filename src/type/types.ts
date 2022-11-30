export interface Product {
  category: Category;
  description: string;
  id: number;
  images: Array<string>;
  price: number;
  title: string;
}

export interface Category {
  id: number;
  image: string;
  name: string;
}

export enum FilterBy {
  ALL = "All",
  FURNITURE = "Furniture",
  ELECTRONICS = "Electronics",
  CLOTHES = "Clothes",
  OTHERS = "Others",
  SHOES = "Shoes",
}
