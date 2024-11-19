import { User } from './../users/user.model';
import { ILoginResponse } from "./auth.interface";
import jwt, { JwtPayload } from "jsonwebtoken";
import CustomError from '../../errors/CustomError';
import { createToken } from './jwtHelper';
import { IUser } from '../users/user.interface';
import bcrypt from "bcrypt";

const login = async (data: IUser): Promise<ILoginResponse> => {




    const isUserExists = await User.findOne({ email: data.email });
   
    if (!isUserExists) {
        throw new CustomError(404, "Email or password is invalid");
    }
    const checkPassword = await bcrypt.compare(data.password, isUserExists.password);
    
    if (!checkPassword) {
        throw new CustomError(404, "Email or password is invalid");
    }


    const Tokendata = {
        role: isUserExists.role,
        id: isUserExists.id,
        email: isUserExists.email
    }


    const accessToken = createToken(Tokendata, "access_Token_secret", { expiresIn: '10d' });
    const refreshToken = createToken(Tokendata, "refreshToken_secret", { expiresIn: "365d" });



    return {
        accessToken,
        refreshToken
    };

}
const refreshToken = async (token: string): Promise<ILoginResponse> => {
    const decodedUserInfo = jwt.verify(token, 'refreshToken_secret') as JwtPayload;

    if (decodedUserInfo && 'id' in decodedUserInfo) {
        const isUserExists = await User.findById(decodedUserInfo.id);

        if (!isUserExists) {
            throw new Error("User does not exist");
        }
    }


    const tokenData = {
        role: decodedUserInfo.role,
        id: decodedUserInfo.id
    }

    const accessToken = createToken(tokenData, "access_Token_secret", { expiresIn: '10d' });
    return {
        accessToken
    }
}

export const AuthService = {
    login, refreshToken
}