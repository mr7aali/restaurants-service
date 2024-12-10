import { HydratedDocument, Model } from "mongoose";

export type IOrder = {
    userEmail: string;
    phone: string;
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    cartProducts: Record<string, any>;
    paid: boolean;

}


//instance methods
export interface OrderMethods {
    fullName(): string;
}

//static
export interface OrderModel extends Model<IOrder, Record<string, unknown>, OrderMethods> {
    createWithFullName(name: string): Promise<HydratedDocument<IOrder, OrderMethods>>;
    fullName(): string;
    projectInfo(data: { _id: string }): IOrder | null;
}