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



    const result = await FoodCategory.findOne({_id:id}).populate("foodItems");
    const foodItems = await FoodItem.find({FoodCatagory:id}) ;
   
    // const result = await FoodCategory.findById(id);
  const data = {...result,foodItems:foodItems}
console.log(data);
    return result;
}
export const foodCategoryService = {
    create, getAll, getSingle
}