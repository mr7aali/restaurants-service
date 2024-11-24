// import { IPaginationOptons } from './../../../interfaces/pagination';
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IPaginationOptons } from "../../../interfaces/pagination";
import { IGenericMetaResponse } from "../../../interfaces/responseType";
import { IFoodItem } from "./foodItem.interface";
import { MenuItem } from "./foodItem.model";


const create = async (data: IFoodItem): Promise<IFoodItem> => {
    const result = (await MenuItem.create(data));
    return result;
}
const getAll = async (paginationOptons: IPaginationOptons): Promise<IGenericMetaResponse<IFoodItem[]>> => {
    const { page, limit, skip, sortBy, sortOrder } =
        paginationHelpers.calculatePagination(paginationOptons);

    const foodItems = await MenuItem.find({}).sort().skip(skip).limit(limit);
    const total = await MenuItem.countDocuments();

    return {
        data:foodItems,
        meta:{
            page, limit, total,
        }
    };
}
const getSingle = async (id: string): Promise<IFoodItem | null> => {
    const result = await MenuItem.findById(id);
    return result;
}
export const foodItemService = {
    create, getAll, getSingle
}