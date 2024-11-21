import { Schema, model } from "mongoose";
import { FoodCategoryModel, IFoodCategory, IFoodCategoryMethods } from "./foodCategory.interface";



const FoodCategorySchema = new Schema<IFoodCategory, FoodCategoryModel, IFoodCategoryMethods>({
    name: { type: String, require: true, unique: true },
    image: { type: String },
}, {
    timestamps: true
});


export const Category = model<IFoodCategory, FoodCategoryModel>("Category", FoodCategorySchema);