import { Schema, model } from "mongoose";
import { FoodCategoryModel, IFoodCategory, IFoodCategoryMethods } from "./foodCategory.interface";
const FoodCategorySchema = new Schema<IFoodCategory, FoodCategoryModel, IFoodCategoryMethods>({
    name: {
        required: true,
        type: String,
        unique: true
    },
   
     image:{
        required: true,
        type: String
     },
    // FoodItem: [{ type: Schema.Types.ObjectId,  ref: 'FoodItem' }]
    foodItems: [{
        type: Schema.Types.ObjectId,
        ref: 'FoodItem'
    }]
}, {
    timestamps: true
});


export const FoodCategory = model<IFoodCategory, FoodCategoryModel>("FoodCategory", FoodCategorySchema);