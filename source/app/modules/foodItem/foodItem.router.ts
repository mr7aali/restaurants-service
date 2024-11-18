import express from "express";
import { foodItemController } from "./foodItem.controller";

const router = express.Router();
router.post("/create", foodItemController.create);
router.get("/get-all", foodItemController.getAll);
router.get("/get/:id", foodItemController.getSingle);

export const foodItemRouter = router;