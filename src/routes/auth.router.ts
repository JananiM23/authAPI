import { Router } from "express";
import controller from "../controller/auth.controller";

const router = Router();
const authController = new controller;

router.post('/login', authController.login);
router.post('/signUp', authController.signUp);

export default router;

