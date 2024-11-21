import { IFoodItem } from "./foodItem.interface";
import { MenuItem } from "./foodItem.model";


const create = async (data: IFoodItem): Promise<IFoodItem> => {
    const result = (await MenuItem.create(data));
    return result;
}
const getAll = async (data: IFoodItem): Promise<IFoodItem[]> => {
    const result = await MenuItem.find({});
    return result;
}
const getSingle = async (id: string): Promise<IFoodItem | null> => {
    const result = await MenuItem.findById(id);
    return result;
}
export const foodItemService = {
    create, getAll, getSingle
}