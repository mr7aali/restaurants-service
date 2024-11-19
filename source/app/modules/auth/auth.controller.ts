import { Request, Response } from "express"
import sendResponse from "../../../shared/sendResponse";
import { AuthService } from "./auth.service";
import CustomError from "../../errors/CustomError";
import CatchAsync from "../../../shared/CatchAsync";



const login = CatchAsync(
    async (req: Request, res: Response) => {
        const data = req.body;

        const result = await AuthService.login(data);



        //set refresh token into cookie
        const cookieOption = {
            secure: true,  // production ? true : false
            httpOnly: true
        };
        res.cookie("refreshToken", result.refreshToken, cookieOption);


        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "login successfully",
            data: {
                accessToken: result.accessToken
            }
        });
    }
)
const refreshToken = CatchAsync(
    async (req: Request, res: Response) => {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            throw new CustomError(403, "Refresh Token not found!")
        }
        const result = await AuthService.refreshToken(refreshToken);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "refreshToken created successfully",
            data: {
                accessToken: result.accessToken
            }
        });
    }
)
export const AuthController = {
    login, refreshToken
}