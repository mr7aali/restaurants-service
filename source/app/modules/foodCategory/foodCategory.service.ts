import { MenuItem } from "../foodItem/foodItem.model";
import { IFoodCategory } from "./foodCategory.interface";
import { Category } from "./foodCategory.model";

const create = async (data: IFoodCategory): Promise<IFoodCategory> => {
    const result = (await Category.create(data));
    return result;
}
const getAll = async (data: IFoodCategory): Promise<IFoodCategory[]> => {
    const result = await Category.find({});
    return result;
}

const getSingle = async (id: string): Promise<IFoodCategory | null> => {
    let result = await Category.findOne({ _id: id }).populate("foodItems");
    if (result) {
        // const r = MenuItem
        const foodItems = await MenuItem.find({ FoodCatagory: id });
        // if (result.foodItems) {
        //     result.foodItems = foodItems; 
        // }
    }
    return result;
}
export const foodCategoryService = {
    create, getAll, getSingle
}