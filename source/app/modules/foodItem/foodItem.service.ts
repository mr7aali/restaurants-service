import { IFoodItem } from "./foodItem.interface";
import { FoodItem } from "./foodItem.model";


const create = async (data: IFoodItem): Promise<IFoodItem> => {
    const result = (await FoodItem.create(data));
    const r = await result.populate("FoodCatagory");
   
    return result;
}
const getAll = async (data: IFoodItem): Promise<IFoodItem[]> => {
    const result = await FoodItem.find({}).populate("FoodCatagory");
    return result;
}
const getSingle =async (id: string): Promise<IFoodItem | null> => {
    const result = await FoodItem.findById(id).populate("FoodCatagory");
    return result;
}
export const foodItemService = {
    create, getAll ,getSingle
}