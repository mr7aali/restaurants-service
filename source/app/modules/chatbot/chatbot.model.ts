import { Schema, model } from "mongoose";
import { ChatbotModel, IChatBot, IChatBotMethods } from "./chatbot.interface";

const ChatbotSchema = new Schema<IChatBot, ChatbotModel, IChatBotMethods>({
    agent: {
        required: true,
        type: String,
        unique: true
    },
    text: {
        required: true,
        type: String
    },

    time: {
        required: true,
        type: String
    }

}, {
    timestamps: true
});

export const ChatBot = model<IChatBot, ChatbotModel>("ChatBot", ChatbotSchema);