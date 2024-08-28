import CatchAsync from "../../../shared/CatchAsync"
import sendResponse from "../../../shared/sendResponse";
import { IFoodItem } from "./foodItem.interface";
import { foodItemService } from "./foodItem.service";



const create = CatchAsync(
    async (req, res) => {
        const data = req.body;
        const result = await foodItemService.create(data);
        sendResponse<IFoodItem>(res, {
            success: true,
            statusCode: 200,
            message: "food item created successsfully!",
            data: result
        })
    }
);
const getAll = CatchAsync(
    async (req, res) => {
        const data = req.body;
        const result = await foodItemService.getAll(data);
        sendResponse<IFoodItem[]>(res, {
            success: true,
            statusCode: 200,
            message: "data retrieved successfully!",
            data: result
        })
    }
);
const getSingle = CatchAsync(
    async (req, res) => {
        const result = await foodItemService.getSingle(req.params.id);
        sendResponse<IFoodItem | null>(res, {
            success: true,
            statusCode: 200,
            message: "data retrieved successfully!",
            data: result
        })
    }
);
export const foodItemController = {
    create, getAll, getSingle
}