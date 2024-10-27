
import CatchAsync from "../../../shared/CatchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IChatBotTextType } from "./chatbot.interface";
import { chatBotService } from "./chatbot.service";

const create = CatchAsync(
    async (req, res) => {
        const data = req.body;
        const result = await chatBotService.reply(data);
        sendResponse<IChatBotTextType>(res, {
            success: true,
            statusCode: 200,
            message: "Successsfully replied!",
            data: result
        })
    }
);


export const chatBotController = {
    create
}