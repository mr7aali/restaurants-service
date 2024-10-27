import { Schema, model } from "mongoose";
import { FoodItemModel, IFoodItem, IFoodItemMethods } from "./foodItem.interface";

const foodSchema = new Schema<IFoodItem, FoodItemModel, IFoodItemMethods>({
    name: {
        required: true,
        type: String,
        unique: true
    },
    image: {
        required: true,
        type: String,

    },
    description: {
        required: true,
        type: String,

    },
    category: {
        required: true,
        type: String,
    },
    basePrice: {
        required: true,
        type: Number
    },
    sizes: [
        {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    extraIngredientsPrices: [
        {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    FoodCatagory: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'FoodCategory',
    }
}, {
    timestamps: true
});


export const FoodItem = model<IFoodItem, FoodItemModel>("FoodItem", foodSchema);