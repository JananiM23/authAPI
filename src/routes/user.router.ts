import { Router } from "express";
import controller from "../controller/user.controller";

const router = Router();
const userController = new controller;

router.get('/get', userController.welcome);

export default router; 