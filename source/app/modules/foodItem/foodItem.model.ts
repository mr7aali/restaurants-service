import { Schema, model } from "mongoose";
import { FoodItemModel, IFoodItem, IFoodItemMethods } from "./foodItem.interface";

const foodSchema = new Schema<IFoodItem, FoodItemModel, IFoodItemMethods>({
    name: {
        required: true,
        type: String,
        unique: true
    },
    price: {
        required: true,
        type: Number,

    },
    discount: {
        required: true,
        type: Number,

    },
    FoodCatagory: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'FoodCategory',
    }
}, {
    timestamps: true
});


export const FoodItem = model<IFoodItem, FoodItemModel>("FoodItem", foodSchema);