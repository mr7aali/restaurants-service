import { HydratedDocument, Model } from "mongoose";
// import { IChatBot } from "../chatbot/chatbot.interface";
interface IChatBot {
  agent: "ai" | "user";
  time: string,
  text: string;
}
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  projectId: string;
  ChatingWithSystem: IChatBot[];
}



//instance methods
export interface IUserMethods {
  fullName(): string;
}

//static
export interface IUserModel extends Model<IUser, Record<string, unknown>, IUserMethods> {
  createWithFullName(name: string): Promise<HydratedDocument<IUser, IUserMethods>>;
  fullName(): string;
}

// export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
// export type UserModel = Model<IUser, Record<string, unknown>>;

