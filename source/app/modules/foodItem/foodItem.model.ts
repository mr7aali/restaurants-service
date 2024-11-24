import mongoose, { Schema, model, models } from "mongoose";
import { FoodItemModel, IFoodItem, IFoodItemMethods } from "./foodItem.interface";
const ExtraPriceSchema = new Schema({
    name: String,
    price: Number
})


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
        type: String,
    },
    category: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Category" },
    basePrice: { type: Number },
    sizes: { type: [ExtraPriceSchema] },
    extraIngredientsPrices: { type: [ExtraPriceSchema] },

}, {
    timestamps: true
});


export const MenuItem = models?.MenuItem || model<IFoodItem, FoodItemModel>("MenuItem", foodSchema);