import { Router } from "express";
import Controller from "../controller/user.controller";

const router = Router();
const controller = new Controller();

router.get('/login', controller.login);
router.post('/signUp', controller.signUp);


export default router;