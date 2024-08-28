import { FoodItem } from './../foodItem/foodItem.model';
import { IFoodCategory } from "./foodCategory.interface";
import { FoodCategory } from "./foodCategory.model";


const create = async (data: IFoodCategory): Promise<IFoodCategory> => {
    const result = (await FoodCategory.create(data));
    return result;
}

const getAll = async (data: IFoodCategory): Promise<IFoodCategory[]> => {
    const result = await FoodCategory.find({}).populate("foodItems");
    // console.log(result);
    return result;
}

const getSingle = async (id: string): Promise<IFoodCategory | null> => {



    let result = await FoodCategory.findOne({ _id: id }).populate("foodItems");
    if (result) {
        const foodItems = await FoodItem.find({ FoodCatagory: id });
        if (result.foodItems) {
            result.foodItems = foodItems; 
        }
    }
    return result;
}
export const foodCategoryService = {
    create, getAll, getSingle
}