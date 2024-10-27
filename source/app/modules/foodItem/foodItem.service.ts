import { IFoodItem } from "./foodItem.interface";
import { FoodItem } from "./foodItem.model";


const create = async (data: IFoodItem): Promise<IFoodItem> => {
    const result = (await FoodItem.create(data));
    return result;
}
const getAll = async (data: IFoodItem): Promise<IFoodItem[]> => {
    const result = await FoodItem.find({});
    return result;
}
const getSingle = async (id: string): Promise<IFoodItem | null> => {
    const result = await FoodItem.findById(id).populate("FoodCatagory");
    return result;
}
export const foodItemService = {
    create, getAll, getSingle
}