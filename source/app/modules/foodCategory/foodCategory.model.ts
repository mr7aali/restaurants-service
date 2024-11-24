import { Schema, model, models } from "mongoose";
import { FoodCategoryModel, IFoodCategory, IFoodCategoryMethods } from "./foodCategory.interface";



const FoodCategorySchema = new Schema<IFoodCategory, FoodCategoryModel, IFoodCategoryMethods>({
    name: { type: String, require: true, unique: true },
    image: { type: String },
}, {
    timestamps: true
});


export const Category =models?.Category || model<IFoodCategory, FoodCategoryModel>("Category", FoodCategorySchema);