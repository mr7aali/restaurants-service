// Schema<IFoodItem, FoodItemModel, IFoodItemMethods>({

import mongoose, { models } from "mongoose";
import { IOrder, OrderMethods, OrderModel } from "./order.interface";

const OrderSchema = new mongoose.Schema<IOrder,OrderModel,OrderMethods>({
    userEmail: { type: String },
    phone: { type: String },
    streetAddress: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    postalCode: { type: String },
    cartProducts: { type: Object },
    paid: { type: Boolean, default: false },
}, { timestamps: true });

export const Order = models?.Order || mongoose.model("Order", OrderSchema);