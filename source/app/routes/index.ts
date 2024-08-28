import express from "express";
import { userRoutes } from "../modules/users/user.route";
import { foodCategoryRouter } from "../modules/foodCategory/foodCategory.router";
import { foodItemRouter } from "../modules/foodItem/foodItem.router";
const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: "/food-categories",
        route: foodCategoryRouter
    },
    {
        path: "/food-item",
        route: foodItemRouter
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;