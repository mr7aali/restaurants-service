import { IFoodItem } from './../foodItem/foodItem.interface';
import { HydratedDocument, Model, Types } from "mongoose";



export interface IFoodCategory {
    name: string;
    image: string,
}


//instance methods
export interface IFoodCategoryMethods {
    fullName(): string;
}

//static
export interface FoodCategoryModel extends Model<IFoodCategory, Record<string, unknown>, IFoodCategoryMethods> {
    createWithFullName(name: string): Promise<HydratedDocument<IFoodCategory, IFoodCategoryMethods>>;
    fullName(): string;
    projectInfo(data: { _id: string }): IFoodCategory | null;
}