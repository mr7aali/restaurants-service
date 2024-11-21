import { HydratedDocument, Model, Types } from "mongoose";
import { IFoodCategory } from "../foodCategory/foodCategory.interface";

export interface IFoodItem {
    name: string;
    image: string;
    description: string;
    basePrice: number;
    sizes: { name: string; price: number }[];
    extraIngredientsPrices: { name: string; price: number }[];
    category: Types.ObjectId | IFoodCategory;
    // FoodItem: Types.ObjectId | IFoodCategory;
}


//instance methods
export interface IFoodItemMethods {
    fullName(): string;
}

//static
export interface FoodItemModel extends Model<IFoodItem, Record<string, unknown>, IFoodItemMethods> {
    createWithFullName(name: string): Promise<HydratedDocument<IFoodItem, IFoodItemMethods>>;
    fullName(): string;
    projectInfo(data: { _id: string }): IFoodItem | null;
}