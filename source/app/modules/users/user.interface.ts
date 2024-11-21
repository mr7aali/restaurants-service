import { HydratedDocument, Model } from "mongoose";
// import { IChatBot } from "../chatbot/chatbot.interface";
interface IChatBot {
  agent: "ai" | "user";
  time: string,
  text: string;
}
export interface IUser {
  name: string;
  email: string;
  password: string;
  image?: string;
  phone?: string;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  state?: string;
  country?: string;
  isAdmin: boolean;
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



