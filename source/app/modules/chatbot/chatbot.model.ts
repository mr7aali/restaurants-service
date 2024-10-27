import { Schema, model } from "mongoose";
import { ChatbotModel, IChatBot, IChatBotMethods } from "./chatbot.interface";

const FoodCategorySchema = new Schema<IChatBot, ChatbotModel, IChatBotMethods>({
    agent: {
        required: true,
        type: String,
        unique: true
    },
    text: {
        required: true,
        type: String
    },

    time: [{
        type: Schema.Types.ObjectId,
        ref: 'FoodItem'
    }]
}, {
    timestamps: true
});

export const ChatBot = model<IChatBot, ChatbotModel>("ChatBot", FoodCategorySchema);