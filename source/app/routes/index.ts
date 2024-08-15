import express from "express";
import { userRoutes } from "../modules/users/user.route";
import { foodCategoryRouter } from "../modules/foodCategory/foodCategory.router";
const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: "/food-categories",
        route: foodCategoryRouter

    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;