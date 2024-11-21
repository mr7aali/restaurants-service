import { Schema, model } from "mongoose";
import { IUser, IUserMethods, IUserModel } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../../config";

const ChatBotSchema: Schema = new Schema({
    agent: {
        type: String,
        enum: ['ai', 'user'],
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
}); 
const userSchema = new Schema<IUser, IUserModel, IUserMethods>({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        validate: (password: string) => {
            if (!password.length || password.length < 2) {
                new Error('Password must be at least 8 characters');
                return false;
            }
        }
    },
    image: { type: String },
    phone: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    isAdmin: { type: Boolean, default: false },
    ChatingWithSystem: {
        type: [ChatBotSchema],
        default: [],
    },
}, {
    timestamps: true
});

userSchema.statics.fullName = async function () {

}
userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, Number(config.bcryptSaltRounds));
    next();
})

export const User = model<IUser, IUserModel>('User', userSchema);