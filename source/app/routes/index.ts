import express from "express";
import { userRoutes } from "../modules/users/user.route";
import { foodCategoryRouter } from "../modules/foodCategory/foodCategory.router";
import { foodItemRouter } from "../modules/foodItem/foodItem.router";
import { chatBorRouter } from "../modules/chatbot/chatbot.route";
import { authRoutes } from "../modules/auth/auth.route";
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
    },
    {
        path: "/chatbot",
        route: chatBorRouter
    },
    {
        path: "/auth",
        route: authRoutes
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;