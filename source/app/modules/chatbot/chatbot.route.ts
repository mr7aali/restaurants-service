import express from "express";
import { chatBotController } from "./chatbot.controller";

const router = express.Router();
router.post("/reply", chatBotController.create);
// router.get("/message",chatBotController.getMessage)


export const chatBotRouter = router;