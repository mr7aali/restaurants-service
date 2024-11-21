import { HydratedDocument, Model } from "mongoose";

export interface IChatBotTextType { agent: "ai" | "user"; time: string; text: string };

export interface IChatBot {
    agent: "ai" | "user";
    time: string,
    text: string;
}


//instance methods
export interface IChatBotMethods {
    fullName(): string;
}

//static
export interface ChatbotModel extends Model<IChatBot, Record<string, unknown>, IChatBotMethods> {
    createWithFullName(name: string): Promise<HydratedDocument<IChatBot, IChatBotMethods>>;
    fullName(): string;
    projectInfo(data: { _id: string }): IChatBot | null;
}