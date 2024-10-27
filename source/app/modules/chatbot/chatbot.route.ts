import express from "express";
import { chatBotController } from "./chatbot.controller";

const router = express.Router();
router.post("/reply", chatBotController.create);


export const chatBorRouter = router;