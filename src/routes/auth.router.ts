import { Router } from "express";
import controller from "../controller/auth.controller";
import userValidator from "../middleware/validators/userValidator";

const router = Router();
const authController = new controller();
const validator = new userValidator();

router.post('/signIn',validator.userSignIn, authController.signIn);
router.post('/signUp',validator.userSignUp, authController.signUp);

export default router;

