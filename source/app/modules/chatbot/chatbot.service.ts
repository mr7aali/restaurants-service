// import { User } from './../users/user.model';
import { text } from "express";
import CustomError from "../../errors/CustomError";
import { User } from "../users/user.model";
import { formatTime } from "../../../utils/formatTime12";
import { IUser } from "../users/user.interface";
import { IChatBotTextType } from "./chatbot.interface";
import { generateAIResponse } from "./helpers";
// import { generateAIResponse } from "./helpers/chatbot.herlpers";


const reply = async (data: { userId: string; text: string }): Promise<IChatBotTextType> => {

    let userProfile = await User.findById(data.userId) as IUser;
    if (!userProfile) {
        throw new CustomError(404, "Users not found!");
    }

    if (userProfile.ChatingWithSystem.length > 100) {
        userProfile.ChatingWithSystem.splice(0, 50); // Remove the first 50 elements
    }
    const userText: IChatBotTextType = {
        agent: "user",
        text: data.text,
        time: formatTime(new Date())
    }
    const agentResponse = await generateAIResponse(data.text);
    const agentText: IChatBotTextType = {
        agent: "ai",
        text: agentResponse,
        time: formatTime(new Date())
    }

    
    userProfile.ChatingWithSystem.push(userText, agentText);
    const saveToDB = await User.updateOne(
        { _id: data.userId },
        { ChatingWithSystem: userProfile.ChatingWithSystem }
    );
    // const saveToDB = await User.updateOne({ _id: data.userId }, { $push: { ChatingWithSystem: [userText, agentText] } });

    return agentText;
}

const getMessage = (userId: string) => {

}

export const chatBotService = {
    reply, getMessage
}

